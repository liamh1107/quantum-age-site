import type { Testimonial } from "@/content/references";
import { cn } from "@/lib/utils";

export function TestimonialQuote({
  testimonial,
  size = "md",
  className,
  style,
}: {
  testimonial: Testimonial;
  size?: "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <figure className={cn("flex flex-col", className)} style={style}>
      <span aria-hidden="true" className="font-serif text-6xl leading-none text-green">
        “
      </span>
      <blockquote
        className={cn(
          "font-serif text-ink",
          size === "lg" ? "text-[clamp(1.5rem,1.2rem+1.2vw,2.25rem)] leading-[1.25]" : "text-[1.375rem] leading-[1.35]"
        )}
      >
        <p>{testimonial.quote}</p>
      </blockquote>
      <figcaption className="mt-6 border-t border-stone pt-4 text-[0.9375rem]">
        <span className="block font-semibold text-ink">{testimonial.name}</span>
        <span className="block text-muted-foreground">
          {testimonial.role}, {testimonial.organization}
        </span>
      </figcaption>
    </figure>
  );
}
