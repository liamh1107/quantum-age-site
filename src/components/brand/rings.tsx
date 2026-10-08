import { cn } from "@/lib/utils";

/**
 * Line drawing of the four overlapping rings in the Quantum Age mark.
 * Circle spacing comes from the logo SVG: radius 13.79, centers 9.2 apart, scaled so the
 * flower keeps the same outer size. The plum center is drawn from those same circles:
 * each side is an arc concentric with one ring, and the corners are where the arcs meet.
 * `intro` draws the rings, then this outline, on load.
 */
const CENTER = 200;
const RADIUS = 94.77;
const OFFSET = 63.23;
const OUTER_RADIUS = 126.77;

/** How far inside each green ring the plum wall sits. The wall stays parallel to that ring. */
const CORE_INSET = 5;
/** Radians trimmed off each arc so the corner can turn without a kink. Short, so the side stays an arc. */
const CORE_BLEND = 0.05;

/**
 * Closed outline starting at the top midpoint and running clockwise.
 * Side order matches the rings: top from the bottom circle, then right, bottom, left.
 */
function corePath() {
  const radius = RADIUS - CORE_INSET;
  const corner = (-OFFSET + Math.sqrt(2 * radius * radius - OFFSET * OFFSET)) / 2;
  const circles = [
    { cx: CENTER, cy: CENTER + OFFSET },
    { cx: CENTER - OFFSET, cy: CENTER },
    { cx: CENTER, cy: CENTER - OFFSET },
    { cx: CENTER + OFFSET, cy: CENTER },
  ];
  const corners = [
    { x: CENTER + corner, y: CENTER - corner },
    { x: CENTER + corner, y: CENTER + corner },
    { x: CENTER - corner, y: CENTER + corner },
    { x: CENTER - corner, y: CENTER - corner },
  ];
  const at = (circle: { cx: number; cy: number }, point: { x: number; y: number }) =>
    Math.atan2(point.y - circle.cy, point.x - circle.cx);
  const point = (circle: { cx: number; cy: number }, angle: number) => [
    circle.cx + radius * Math.cos(angle),
    circle.cy + radius * Math.sin(angle),
  ];
  const tangent = (angle: number) => [-Math.sin(angle), Math.cos(angle)];
  const spans = circles.map((circle, i) => {
    let start = at(circle, corners[(i + 3) % 4]);
    let end = at(circle, corners[i]);
    while (end <= start) end += Math.PI * 2;
    return { circle, start, end };
  });
  const trimmed = spans.map((span) => ({
    ...span,
    start: span.start + CORE_BLEND,
    end: span.end - CORE_BLEND,
  }));
  const fmt = (value: number) => value.toFixed(2);
  const top = (spans[0].start + spans[0].end) / 2;
  const start = point(spans[0].circle, top);
  let d = `M${fmt(start[0])} ${fmt(start[1])}`;
  for (let i = 0; i < 4; i++) {
    const span = trimmed[i];
    const end = point(span.circle, span.end);
    d += `A${fmt(radius)} ${fmt(radius)} 0 0 1 ${fmt(end[0])} ${fmt(end[1])}`;
    const next = trimmed[(i + 1) % 4];
    const join = point(next.circle, next.start);
    const out = tangent(span.end);
    const into = tangent(next.start);
    const dx = join[0] - end[0];
    const dy = join[1] - end[1];
    const det = out[0] * into[1] - out[1] * into[0];
    const alongOut = (dx * into[1] - dy * into[0]) / det;
    const alongInto = (out[0] * dy - out[1] * dx) / det;
    const handle = Math.min(alongOut, alongInto) * 0.55;
    d += `C${fmt(end[0] + out[0] * handle)} ${fmt(end[1] + out[1] * handle)} ${fmt(join[0] - into[0] * handle)} ${fmt(join[1] - into[1] * handle)} ${fmt(join[0])} ${fmt(join[1])}`;
  }
  d += `A${fmt(radius)} ${fmt(radius)} 0 0 1 ${fmt(start[0])} ${fmt(start[1])}Z`;
  return d;
}

const CORE_PATH = corePath();

export function Rings({
  className,
  tone = "light",
  intro = false,
}: {
  className?: string;
  tone?: "light" | "dark";
  intro?: boolean;
}) {
  const stroke = tone === "dark" ? "rgba(255,255,255,0.22)" : "rgba(35,26,37,0.16)";
  const centers: [number, number][] = [
    [CENTER, CENTER - OFFSET],
    [CENTER + OFFSET, CENTER],
    [CENTER, CENTER + OFFSET],
    [CENTER - OFFSET, CENTER],
  ];
  const order = (i: number) => ({ "--i": i }) as React.CSSProperties;
  return (
    <svg
      viewBox="0 0 400 400"
      className={cn("block", intro && "rings-intro", className)}
      aria-hidden="true"
      focusable="false"
    >
      {centers.map(([cx, cy], i) => (
        <circle key={`o${i}`} cx={cx} cy={cy} r={OUTER_RADIUS} pathLength={1} style={order(i)} fill="none" stroke={stroke} strokeWidth={1} />
      ))}
      <path
        className="ring-core"
        d={CORE_PATH}
        pathLength={1}
        fill="none"
        stroke="var(--plum)"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      {centers.map(([cx, cy], i) => (
        <circle
          key={`g${i}`}
          cx={cx}
          cy={cy}
          r={RADIUS}
          pathLength={1}
          style={order(i)}
          className="ring-green"
          fill="none"
          stroke="var(--green)"
          strokeWidth={2}
        />
      ))}
    </svg>
  );
}
