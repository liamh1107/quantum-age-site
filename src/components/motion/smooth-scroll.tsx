"use client";

import { useEffect, useMemo, useSyncExternalStore } from "react";
import type Lenis from "lenis";
import type { LenisOptions } from "lenis";
import { ReactLenis, useLenis } from "lenis/react";

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/** Longer jumps take a little longer, so short hops feel quick and long ones never feel abrupt. */
function durationFor(distance: number) {
  return Math.min(1.5, 0.6 + distance / 4000);
}

function focusWithoutScroll(el: HTMLElement) {
  if (!el.matches("a[href], button, input, select, textarea, [tabindex]")) el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
}

export function scrollToElement(lenis: Lenis, el: HTMLElement, { focus = true } = {}) {
  // The browser may have scrolled natively (e.g. bringing a focused link into view) before Lenis
  // processed the scroll event; start from the real position so the target is computed correctly.
  if (!lenis.isScrolling) lenis.scrollTo(window.scrollY, { immediate: true, force: true });
  // Form fields scroll to their label, so the question stays visible above the focused input.
  const scrollTarget =
    el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement
      ? (el.labels?.[0] ?? el)
      : el;
  const distance = Math.abs(scrollTarget.getBoundingClientRect().top);
  lenis.scrollTo(scrollTarget, { duration: durationFor(distance), easing: easeInOutCubic });
  // Focus moves immediately so screen readers and keyboard users land on the target even mid-animation.
  if (focus) focusWithoutScroll(el);
}

/**
 * Same-page hash links scroll with Lenis and move focus to the target, which Lenis' built-in
 * `anchors` option does not do. Registered in the capture phase so it also covers next/link.
 */
function AnchorLinks() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;
      const link = (event.target as Element | null)?.closest?.("a[href*='#']");
      if (!(link instanceof HTMLAnchorElement) || (link.target && link.target !== "_self")) return;
      const url = new URL(link.href);
      const here = window.location;
      if (!url.hash || url.origin !== here.origin || url.pathname !== here.pathname || url.search !== here.search) return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target || !lenis) return;
      event.preventDefault();
      scrollToElement(lenis, target);
      if (here.hash !== url.hash) window.history.pushState(null, "", url.hash);
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [lenis]);

  return null;
}

/** Marks `<html data-scrolled>` once the page has left the top, for the header's lifted state. */
function ScrollState() {
  const lenis = useLenis((l) => {
    document.documentElement.toggleAttribute("data-scrolled", l.scroll > 8);
  });
  useEffect(() => {
    document.documentElement.toggleAttribute("data-scrolled", window.scrollY > 8);
  }, [lenis]);
  return null;
}

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(reducedMotionQuery);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false
  );
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduce = usePrefersReducedMotion();
  const options = useMemo<LenisOptions>(
    () => ({
      autoRaf: true,
      lerp: 0.1,
      // Lenis' reduced-motion mode still damps over a few frames; hand wheel scrolling back to the browser instead.
      smoothWheel: !reduce,
      // Phones and tablets keep native touch scrolling and momentum.
      syncTouch: false,
      stopInertiaOnNavigate: true,
    }),
    [reduce]
  );

  return (
    <ReactLenis root options={options}>
      <AnchorLinks />
      <ScrollState />
      {children}
    </ReactLenis>
  );
}
