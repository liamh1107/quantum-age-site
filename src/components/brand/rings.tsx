import { cn } from "@/lib/utils";

/**
 * Line drawing of the four overlapping rings in the Quantum Age mark.
 * Circle spacing comes from the logo SVG: radius 13.79, centers 9.2 apart, scaled so the
 * flower keeps the same outer size. The real logo mark sits in front of the rings, large
 * enough to cover the inner crossings. `intro` draws the rings in on load, then fades the mark in.
 */
const CENTER = 200;
const RADIUS = 94.77;
const OFFSET = 63.23;
const OUTER_RADIUS = 126.77;
/** Square footprint of the mark in the 400 viewBox. Four times the previous inset, so it overlaps the rings. */
const MARK_SIZE = 184;

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
      <image
        href="/brand/quantum-age-mark.svg"
        x={CENTER - MARK_SIZE / 2}
        y={CENTER - MARK_SIZE / 2}
        width={MARK_SIZE}
        height={MARK_SIZE}
        className="ring-mark"
        pointerEvents="none"
      />
    </svg>
  );
}
