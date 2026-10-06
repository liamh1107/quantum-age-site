import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-sm border border-transparent font-sans font-semibold whitespace-nowrap transition-colors duration-150 outline-none select-none focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--focus)] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-plum text-white hover:bg-plum-700",
        accent: "bg-green text-ink hover:bg-[#7fb534]",
        outline: "border-ink/25 bg-transparent text-ink hover:border-ink hover:bg-ink/[0.03]",
        inverse: "bg-paper text-plum-900 hover:bg-white",
        "outline-inverse": "border-white/40 bg-transparent text-white hover:border-white hover:bg-white/5",
        ghost: "text-ink hover:bg-ink/5",
        secondary: "bg-plum-50 text-plum-900 hover:bg-[#ebe1e9]",
        destructive: "bg-error/10 text-error hover:bg-error/20",
        link: "h-auto px-0 text-plum underline underline-offset-4 decoration-1 hover:text-plum-700",
      },
      size: {
        default: "h-11 px-5 text-[0.9375rem]",
        sm: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "size-11",
        "icon-sm": "size-10",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
