"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type Lenis from "lenis";
import { useScrollFrame } from "@/components/motion/scroll-linked";
import { SectionHeading, TextLink } from "@/components/site/blocks";
import { cn } from "@/lib/utils";

type Term = { term: string; detail: string };

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

// Geometry in a 600 × 600 viewBox. Nodes sit on the diagonals so the spokes meet the core's corners.
const C = 300;
const ORBIT = 200;
const NODE_R = 28;
const CORE_HALF = 66;
const ANGLES = [-135, -45, 45, 135];
const r2 = (n: number) => Math.round(n * 100) / 100;
const at = (deg: number, r: number) => {
  const a = (deg * Math.PI) / 180;
  return [r2(C + r * Math.cos(a)), r2(C + r * Math.sin(a))] as const;
};
const NODES = ANGLES.map((a) => at(a, ORBIT));
const SPOKES = ANGLES.map((a) => {
  const [x1, y1] = at(a, ORBIT - NODE_R - 8);
  const [x2, y2] = at(a, CORE_HALF * Math.SQRT2 + 8);
  return `M${x1} ${y1}L${x2} ${y2}`;
});
const ARC_GAP = 12;
const ARCS = ANGLES.map((a) => {
  const [x1, y1] = at(a + ARC_GAP, ORBIT);
  const [x2, y2] = at(a + 90 - ARC_GAP, ORBIT);
  return `M${x1} ${y1}A${ORBIT} ${ORBIT} 0 0 1 ${x2} ${y2}`;
});
const TICKS = Array.from({ length: 72 }, (_, i) => {
  const deg = i * 5;
  const major = ANGLES.some((a) => (a + 360) % 360 === deg);
  const [x1, y1] = at(deg, major ? 252 : 258);
  const [x2, y2] = at(deg, 266);
  return { d: `M${x1} ${y1}L${x2} ${y2}`, major };
});
const pct = (v: number) => `${r2((v / 600) * 100)}%`;

// Where each stage starts on the 0 → 1 scroll timeline (four terms, then the result), and how long it takes.
const STARTS = [-0.12, 0.16, 0.38, 0.6, 0.8];
const SPAN = 0.14;

const v = (i: number) => ({ "--p": `var(--n${i}, 1)` }) as React.CSSProperties;

/**
 * The collaborative formula as a convergence map. On large screens the section pins while the
 * reader scrolls: each term joins the orbit in turn, the orbit closes, and the result lights up.
 * Smaller screens build it as the diagram scrolls into view. Without JavaScript, or with reduced
 * motion, every `--n*` variable is unset and CSS draws the finished state.
 */
export function FormulaStory({
  eyebrow,
  title,
  parts,
  result,
}: {
  eyebrow: string;
  title: string;
  parts: Term[];
  result: Term;
}) {
  const rootRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLLIElement | null)[]>([]);
  const layout = useRef<{ width: number; sticky: boolean; top: number } | null>(null);
  const lastKey = useRef("");
  const [hover, setHover] = useState<number | null>(null);
  const [pinned, setPinned] = useState<number | null>(null);
  const focus = hover ?? pinned;

  const update = useCallback((lenis: Lenis) => {
    const root = rootRef.current;
    const track = trackRef.current;
    const stage = stageRef.current;
    const diagram = diagramRef.current;
    if (!root || !track || !stage || !diagram) return;

    if (lenis.prefersReducedMotion) {
      if (lastKey.current === "static") return;
      lastKey.current = "static";
      STARTS.forEach((_, i) => root.style.removeProperty(`--n${i}`));
      root.style.removeProperty("--dial");
      root.setAttribute("data-complete", "");
      rowsRef.current.forEach((row) => row?.removeAttribute("data-pending"));
      return;
    }

    if (!layout.current || layout.current.width !== window.innerWidth) {
      const style = getComputedStyle(stage);
      layout.current = { width: window.innerWidth, sticky: style.position === "sticky", top: parseFloat(style.top) || 0 };
    }

    const vh = window.innerHeight;
    let p: number;
    if (layout.current.sticky) {
      const travel = track.offsetHeight - stage.offsetHeight;
      p = travel > 0 ? (layout.current.top - track.getBoundingClientRect().top) / travel : 1;
    } else {
      p = (vh - diagram.getBoundingClientRect().top) / (vh * 0.75);
    }

    const values = STARTS.map((s) => easeInOut(clamp01((p - s) / SPAN)));
    const dial = Math.min(1.2, Math.max(-0.2, p)) * 36;
    const key = values.map((n) => n.toFixed(3)).join() + dial.toFixed(1);
    if (key === lastKey.current) return;
    lastKey.current = key;

    values.forEach((n, i) => root.style.setProperty(`--n${i}`, n.toFixed(3)));
    root.style.setProperty("--dial", `${dial.toFixed(2)}deg`);
    root.toggleAttribute("data-complete", values[4] > 0.999);
    rowsRef.current.forEach((row, i) => row?.toggleAttribute("data-pending", values[i] < 0.5));
  }, []);
  useScrollFrame(update);

  // Ambient loops (flow along the spokes, the core's glow) only run while the section is on screen.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const io = new IntersectionObserver(([entry]) => root.toggleAttribute("data-inview", entry.isIntersecting));
    io.observe(root);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (pinned === null) return;
    const onDown = (e: PointerEvent) => {
      if (!groupRef.current?.contains(e.target as Node)) setPinned(null);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [pinned]);

  const interactions = (i: number) => ({
    onPointerEnter: (e: React.PointerEvent) => e.pointerType === "mouse" && setHover(i),
    onPointerLeave: (e: React.PointerEvent) => e.pointerType === "mouse" && setHover(null),
  });
  const nodeProps = (i: number) => ({
    ...interactions(i),
    type: "button" as const,
    "aria-pressed": pinned === i,
    onClick: () => setPinned((cur) => (cur === i ? null : i)),
    onFocus: (e: React.FocusEvent<HTMLButtonElement>) => e.currentTarget.matches(":focus-visible") && setHover(i),
    onBlur: () => setHover(null),
  });

  return (
    <section
      ref={rootRef}
      className="fm on-dark bg-plum-900 text-white"
      aria-labelledby="formula-heading"
      data-focus={focus ?? undefined}
    >
      <div ref={trackRef} className="fm-track">
        <div
          ref={stageRef}
          className="fm-stage container-page grid gap-x-12 gap-y-10 py-[var(--section)] lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:content-center"
        >
          <SectionHeading
            id="formula-heading"
            eyebrow={eyebrow}
            title={title}
            tone="dark"
            className="lg:col-span-5 lg:self-end"
          />

          <div
            ref={diagramRef}
            className="fm-diagram relative mx-auto aspect-square w-full lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:self-center"
          >
            <svg viewBox="0 0 600 600" className="absolute inset-0 size-full overflow-visible" aria-hidden="true" focusable="false">
              <g className="fm-dial">
                {TICKS.map((t) => (
                  <path key={t.d} d={t.d} className={t.major ? "fm-tick-major" : "fm-tick"} />
                ))}
              </g>
              <circle cx={C} cy={C} r={128} className="fm-inner" />
              <circle cx={C} cy={C} r={ORBIT} className="fm-ghost" />
              {ARCS.map((d, i) => (
                <path
                  key={d}
                  d={d}
                  pathLength={1}
                  className="fm-line fm-arc fm-draw"
                  data-part={`${i} ${(i + 1) % 4}`}
                  style={v(i < 3 ? i + 1 : 4)}
                />
              ))}
              {SPOKES.map((d, i) => (
                <g key={d} data-part={`${i} 4`}>
                  <path d={d} pathLength={1} className="fm-line fm-spoke fm-draw" style={v(i)} />
                  <path d={d} pathLength={1} className="fm-flow" style={{ "--i": i } as React.CSSProperties} />
                </g>
              ))}
            </svg>

            <div
              ref={groupRef}
              role="group"
              aria-label="Explore the formula"
              className="fm-group absolute inset-0"
              onKeyDown={(e) => e.key === "Escape" && setPinned(null)}
            >
              {parts.map((p, i) => (
                <button
                  key={p.term}
                  {...nodeProps(i)}
                  className="fm-node"
                  data-part={`${i} 4`}
                  style={{ left: pct(NODES[i][0]), top: pct(NODES[i][1]), ...v(i) }}
                >
                  <span className="fm-node-body">
                    <span className="fm-node-ring">
                      <span aria-hidden="true">0{i + 1}</span>
                    </span>
                    <span className={cn("fm-label", i < 2 ? "bottom-full mb-[0.6em]" : "top-full mt-[0.6em]")}>
                      <span className="fm-term">{p.term}</span>
                      <span className="fm-detail">{p.detail}</span>
                    </span>
                  </span>
                </button>
              ))}
              <button {...nodeProps(4)} className="fm-core" data-part="0 1 2 3 4" style={v(4)}>
                <span className="fm-halo" aria-hidden="true" />
                <span className="fm-core-fill" aria-hidden="true" />
                <span className="fm-core-text">
                  <span className="fm-core-term">{result.term}</span>
                  <span className="fm-core-detail">{result.detail}</span>
                </span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 lg:row-start-2 lg:self-start">
            <ol className="border-b border-white/15">
              {parts.map((p, i) => (
                <li
                  key={p.term}
                  ref={(el) => {
                    rowsRef.current[i] = el;
                  }}
                  data-part={`${i} 4`}
                  className="fm-row flex items-baseline justify-between gap-4 border-t border-white/15 py-3"
                  {...interactions(i)}
                >
                  <span className="fm-row-term font-serif text-xl text-white">
                    {i > 0 && (
                      <span className="mr-2 text-green" aria-hidden="true">
                        +
                      </span>
                    )}
                    {p.term}
                  </span>
                  <span className="fm-row-detail text-right text-white/75">{p.detail}</span>
                </li>
              ))}
              <li
                ref={(el) => {
                  rowsRef.current[4] = el;
                }}
                data-part="0 1 2 3 4"
                className="fm-row flex items-baseline justify-between gap-4 border-t-2 border-white/70 py-3"
                {...interactions(4)}
              >
                <span className="fm-row-term font-serif text-xl font-semibold text-green">
                  <span className="mr-2" aria-hidden="true">
                    =
                  </span>
                  {result.term}
                </span>
                <span className="fm-row-detail text-right font-medium text-white">{result.detail}</span>
              </li>
            </ol>
            <TextLink href="/approach" className="mt-6 text-green hover:text-white">
              How we work with clients
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
