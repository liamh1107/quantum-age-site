import { cn } from "@/lib/utils";

/**
 * Line drawing of the four overlapping rings in the Quantum Age mark.
 * Geometry follows the logo: four circles offset on two axes around a plum square.
 */
export function Rings({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const stroke = tone === "dark" ? "rgba(255,255,255,0.22)" : "rgba(35,26,37,0.16)";
  const centers: [number, number][] = [
    [200, 128],
    [272, 200],
    [200, 272],
    [128, 200],
  ];
  return (
    <svg viewBox="0 0 400 400" className={cn("block", className)} aria-hidden="true" focusable="false">
      {centers.map(([cx, cy], i) => (
        <circle key={`o${i}`} cx={cx} cy={cy} r={118} fill="none" stroke={stroke} strokeWidth={1} />
      ))}
      {centers.map(([cx, cy], i) => (
        <circle key={`g${i}`} cx={cx} cy={cy} r={86} fill="none" stroke="var(--green)" strokeWidth={2} />
      ))}
      <rect x={180} y={180} width={40} height={40} rx={9} fill="var(--plum)" />
    </svg>
  );
}

export function FormulaDiagram({
  labels,
  result,
  className,
}: {
  labels: [string, string, string, string];
  result: string;
  className?: string;
}) {
  const parts: { cx: number; cy: number; tx: number; ty: number; anchor: "middle" | "start" | "end" }[] = [
    { cx: 200, cy: 140, tx: 200, ty: 36, anchor: "middle" },
    { cx: 260, cy: 200, tx: 372, ty: 206, anchor: "end" },
    { cx: 200, cy: 260, tx: 200, ty: 378, anchor: "middle" },
    { cx: 140, cy: 200, tx: 28, ty: 206, anchor: "start" },
  ];
  return (
    <svg viewBox="0 0 400 400" className={cn("block", className)} aria-hidden="true" focusable="false">
      {parts.map((p, i) => (
        <circle
          key={i}
          cx={p.cx}
          cy={p.cy}
          r={92}
          fill={i % 2 === 0 ? "rgba(141,198,63,0.16)" : "rgba(112,69,110,0.08)"}
          stroke={i % 2 === 0 ? "var(--green)" : "var(--plum)"}
          strokeWidth={1.5}
        />
      ))}
      {parts.map((p, i) => (
        <text
          key={`t${i}`}
          x={p.tx}
          y={p.ty}
          textAnchor={p.anchor}
          className="fill-ink font-sans"
          style={{ fontSize: 17, fontWeight: 600 }}
        >
          {labels[i]}
        </text>
      ))}
      <rect x={160} y={176} width={80} height={48} rx={10} fill="var(--plum)" />
      <text x={200} y={206} textAnchor="middle" className="font-sans" style={{ fontSize: 16, fontWeight: 700 }} fill="#fff">
        {result}
      </text>
    </svg>
  );
}
