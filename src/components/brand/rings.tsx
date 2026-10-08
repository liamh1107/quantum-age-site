import { cn } from "@/lib/utils";

/**
 * Line drawing of the four overlapping rings in the Quantum Age mark.
 * Circle spacing comes from the logo SVG: radius 13.79, centers 9.2 apart, scaled so the
 * flower keeps the same outer size. The center is a smooth squircle, inset inside the
 * four circles with a hollow middle. `intro` draws the rings, then this outline, on load.
 */
const CENTER = 200;
const RADIUS = 94.77;
const OFFSET = 63.23;
const OUTER_RADIUS = 126.77;

/**
 * Closed squircle starting at the top and running clockwise, so a dash animation
 * draws it the way the rings draw. Cubics through a superellipse keep the tangent
 * continuous, which four circle arcs do not.
 */
function squirclePath(radius: number, n: number, samples = 48) {
  const points = Array.from({ length: samples }, (_, i) => {
    const t = -Math.PI / 2 + (i / samples) * Math.PI * 2;
    const ct = Math.cos(t);
    const st = Math.sin(t);
    const p = 2 / n;
    return [CENTER + radius * Math.sign(ct) * Math.abs(ct) ** p, CENTER + radius * Math.sign(st) * Math.abs(st) ** p];
  });
  const f = (v: number) => v.toFixed(2);
  let d = `M${f(points[0][0])} ${f(points[0][1])}`;
  for (let i = 0; i < samples; i++) {
    const p0 = points[(i - 1 + samples) % samples];
    const p1 = points[i];
    const p2 = points[(i + 1) % samples];
    const p3 = points[(i + 2) % samples];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(p2[0])} ${f(p2[1])}`;
  }
  return `${d}Z`;
}

const CORE_PATH = squirclePath(23, 2.8);

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
