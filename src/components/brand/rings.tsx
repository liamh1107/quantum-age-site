import { cn } from "@/lib/utils";

/**
 * Line drawing of the four overlapping rings in the Quantum Age mark.
 * Geometry follows the logo: four circles offset on two axes around a plum square.
 * `intro` draws the rings in on load (see `.rings-intro` in globals.css).
 */
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
    [200, 128],
    [272, 200],
    [200, 272],
    [128, 200],
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
        <circle key={`o${i}`} cx={cx} cy={cy} r={118} pathLength={1} style={order(i)} fill="none" stroke={stroke} strokeWidth={1} />
      ))}
      {centers.map(([cx, cy], i) => (
        <circle
          key={`g${i}`}
          cx={cx}
          cy={cy}
          r={86}
          pathLength={1}
          style={order(i)}
          className="ring-green"
          fill="none"
          stroke="var(--green)"
          strokeWidth={2}
        />
      ))}
      <rect x={180} y={180} width={40} height={40} rx={9} fill="var(--plum)" />
    </svg>
  );
}
