import { cn } from "@/lib/utils";

/**
 * Line drawing of the four overlapping rings in the Quantum Age mark.
 * Circle spacing comes from the logo SVG: radius 13.79, centers 9.2 apart, scaled so the
 * flower keeps the same outer size. The plum center is the region inside all four circles
 * (four arcs), which is the cushion in the mark, not a rounded rectangle placed on top.
 * `intro` draws the rings in on load (see `.rings-intro` in globals.css).
 */
const CENTER = 200;
const RADIUS = 94.77;
const OFFSET = 63.23;
const OUTER_RADIUS = 126.77;

/** Corners of the four-circle intersection, then the arc of the opposite circle between them. */
function intersectionPath() {
  const corner = (-OFFSET + Math.sqrt(2 * RADIUS * RADIUS - OFFSET * OFFSET)) / 2;
  const at = (sx: number, sy: number) =>
    `${(CENTER + sx * corner).toFixed(2)} ${(CENTER + sy * corner).toFixed(2)}`;
  const arc = (point: string) => `A${RADIUS} ${RADIUS} 0 0 1 ${point}`;
  const tr = at(1, -1);
  const br = at(1, 1);
  const bl = at(-1, 1);
  const tl = at(-1, -1);
  return `M${tr}${arc(br)}${arc(bl)}${arc(tl)}${arc(tr)}Z`;
}

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
      <path className="ring-core" d={intersectionPath()} fill="var(--plum)" />
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
