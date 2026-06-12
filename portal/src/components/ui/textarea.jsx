import { cn } from '../../lib/utils'

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-white/10 bg-white/5',
        'px-3 py-2 text-sm text-white placeholder:text-white/30',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c9a84c]',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'resize-none font-inherit leading-relaxed',
        className
      )}
      dir="rtl"
      {...props}
    />
  )
}
