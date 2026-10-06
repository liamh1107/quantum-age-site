import Image from "next/image";
import { cn } from "@/lib/utils";

/** Cut-out team headshot on a circular field that echoes the logo rings. */
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
      <div className="absolute inset-x-[6%] bottom-0 aspect-square rounded-full bg-[#ebe5dc] ring-1 ring-stone" aria-hidden="true" />
      <div className="absolute inset-x-[6%] bottom-0 aspect-square overflow-hidden rounded-b-full">
        <Image
          src={src}
          alt={decorative ? "" : name}
          fill
          sizes={sizes}
          className="object-contain object-bottom"
        />
      </div>
    </div>
  );
}
