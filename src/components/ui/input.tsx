import * as React from "react"
import { cn } from "cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full min-w-0 rounded-sm border border-input bg-surface px-3.5 text-base text-ink transition-colors placeholder:text-muted-foreground/80 focus-visible:border-plum disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-error aria-invalid:border-2",
        className
      )}
      {...props}
    />
  )
}

export { Input }
