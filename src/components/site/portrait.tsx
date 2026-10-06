import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Cut-out team headshot on a circular field that echoes the logo rings.
 * Inside a `group` link the cut-out lifts off its field on hover.
 */
export function Portrait({
  src,
  name,
  className,
  sizes = "(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 80vw",
  decorative = false,
}: {
  src: string;
  name: string;
  className?: string;
  sizes?: string;
  decorative?: boolean;
}) {
  return (
    <div className={cn("relative aspect-square", className)}>
      <div
        className="absolute inset-x-[6%] bottom-0 aspect-square rounded-full bg-[#ebe5dc] ring-1 ring-stone transition-[background-color,box-shadow] duration-500 group-hover:bg-green-50 group-hover:ring-green/60"
        aria-hidden="true"
      />
      <div className="absolute inset-x-[6%] bottom-0 aspect-square overflow-hidden rounded-b-full">
        <Image
          src={src}
          alt={decorative ? "" : name}
          fill
          sizes={sizes}
          className="origin-bottom object-contain object-bottom transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
      </div>
    </div>
  );
}
