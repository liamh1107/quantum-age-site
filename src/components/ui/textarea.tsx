import * as React from "react"
import { cn } from "cn"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-32 py-3 field-sizing-content w-full min-w-0 rounded-sm border border-input bg-surface px-3.5 text-base text-ink transition-colors placeholder:text-muted-foreground/80 focus-visible:border-plum disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-error aria-invalid:border-2",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
