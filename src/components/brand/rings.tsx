import { cn } from "@/lib/utils";

/**
 * The Quantum Age mark, built from the same four circles as the logo SVG
 * (radius 13.79, centers 9.2 apart), scaled to the hero. Guides draw first.
 * Gray lobes, green petals, and the plum center are the circle union and its
 * intersections, so the finished mark is what the circles produce.
 */
const CENTER = 200;
const RADIUS = 94.77;
const OFFSET = 63.23;
/** White ring weight in the logo file, scaled with the circles. */
const CUT = (1.9034 / 13.79) * RADIUS;

const circles = [
  { x: CENTER, y: CENTER - OFFSET },
  { x: CENTER + OFFSET, y: CENTER },
  { x: CENTER, y: CENTER + OFFSET },
  { x: CENTER - OFFSET, y: CENTER },
] as const;

const top = circles[0];
const right = circles[1];
const bottom = circles[2];
const left = circles[3];

function intersections(a: { x: number; y: number }, b: { x: number; y: number }) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.hypot(dx, dy);
  const rise = Math.sqrt(Math.max(0, RADIUS * RADIUS - (dist * dist) / 4));
  const midX = (a.x + b.x) / 2;
  const midY = (a.y + b.y) / 2;
  const offX = (rise * dy) / dist;
  const offY = -(rise * dx) / dist;
  const first = { x: midX + offX, y: midY + offY };
  const second = { x: midX - offX, y: midY - offY };
  const fromCenter = (point: { x: number; y: number }) => Math.hypot(point.x - CENTER, point.y - CENTER);
  return fromCenter(first) > fromCenter(second)
    ? { outer: first, inner: second }
    : { outer: second, inner: first };
}

const fmt = (value: number) => value.toFixed(2);

function shortArc(circle: { x: number; y: number }, from: { x: number; y: number }, to: { x: number; y: number }) {
  const start = Math.atan2(from.y - circle.y, from.x - circle.x);
  const end = Math.atan2(to.y - circle.y, to.x - circle.x);
  let delta = end - start;
  while (delta <= -Math.PI) delta += Math.PI * 2;
  while (delta > Math.PI) delta -= Math.PI * 2;
  const sweep = delta > 0 ? 1 : 0;
  return `A${fmt(RADIUS)} ${fmt(RADIUS)} 0 0 ${sweep} ${fmt(to.x)} ${fmt(to.y)}`;
}

function chain(start: { x: number; y: number }, steps: Array<[{ x: number; y: number }, { x: number; y: number }]>) {
  let cursor = start;
  let path = `M${fmt(start.x)} ${fmt(start.y)}`;
  for (const [circle, to] of steps) {
    path += shortArc(circle, cursor, to);
    cursor = to;
  }
  return `${path}Z`;
}

const rightTop = intersections(right, top);
const rightBottom = intersections(right, bottom);
const leftTop = intersections(left, top);
const leftBottom = intersections(left, bottom);
const leftRight = intersections(left, right);
const topBottom = intersections(top, bottom);
const upper = leftRight.outer.y < leftRight.inner.y ? leftRight.outer : leftRight.inner;
const lower = leftRight.outer.y < leftRight.inner.y ? leftRight.inner : leftRight.outer;
const west = topBottom.outer.x < topBottom.inner.x ? topBottom.outer : topBottom.inner;
const east = topBottom.outer.x < topBottom.inner.x ? topBottom.inner : topBottom.outer;

/** Outer silhouette: the union of the four circles. */
const GRAY = chain(rightTop.outer, [
  [right, rightBottom.outer],
  [bottom, leftBottom.outer],
  [left, leftTop.outer],
  [top, rightTop.outer],
]);

/** Petals: the boundary of the overlapping regions. */
const GREEN = chain(rightTop.outer, [
  [right, upper],
  [left, leftTop.outer],
  [top, west],
  [bottom, leftBottom.outer],
  [left, lower],
  [right, rightBottom.outer],
  [bottom, east],
  [top, rightTop.outer],
]);

const corner = (-OFFSET + Math.sqrt(2 * RADIUS * RADIUS - OFFSET * OFFSET)) / 2;
const northEast = { x: CENTER + corner, y: CENTER - corner };
const southEast = { x: CENTER + corner, y: CENTER + corner };
const southWest = { x: CENTER - corner, y: CENTER + corner };
const northWest = { x: CENTER - corner, y: CENTER - corner };

/** Center: the region inside all four circles. */
const PURPLE = chain(northEast, [
  [left, southEast],
  [top, southWest],
  [right, northWest],
  [bottom, northEast],
]);

export function Rings({
  className,
  tone = "light",
  intro = false,
}: {
  className?: string;
  tone?: "light" | "dark";
  intro?: boolean;
}) {
  const guide = tone === "dark" ? "rgba(255,255,255,0.85)" : "rgba(35,26,37,0.8)";
  const wash = tone === "dark" ? "rgba(255,255,255,0.16)" : "rgba(35,26,37,0.14)";
  const order = (i: number) => ({ "--i": i }) as React.CSSProperties;
  return (
    <svg
      viewBox="0 0 400 400"
      className={cn("block", intro && "rings-intro", className)}
      aria-hidden="true"
      focusable="false"
      pointerEvents="none"
    >
      <g className="ring-wash">
        <path d={GRAY} fill={wash} />
        <path d={GREEN} fill={wash} />
        <path d={PURPLE} fill={wash} />
      </g>
      <path className="ring-fill ring-gray" d={GRAY} fill="var(--brand-gray)" />
      <path className="ring-fill ring-leaf" d={GREEN} fill="var(--green)" />
      <path className="ring-fill ring-core" d={PURPLE} fill="var(--plum)" />
      <g className="ring-cut" fill="none" stroke="#fff" strokeWidth={CUT}>
        {circles.map((circle, i) => (
          <circle key={`cut${i}`} cx={circle.x} cy={circle.y} r={RADIUS} />
        ))}
      </g>
      <g className="ring-guides" fill="none" stroke={guide} strokeWidth={1.35}>
        {circles.map((circle, i) => (
          <circle key={`guide${i}`} className="ring-guide" cx={circle.x} cy={circle.y} r={RADIUS} pathLength={1} style={order(i)} />
        ))}
        {[GRAY, GREEN, PURPLE].map((d, i) => (
          <path key={`x${i}`} className="ring-intersect" d={d} pathLength={1} style={order(i)} />
        ))}
      </g>
    </svg>
  );
}
