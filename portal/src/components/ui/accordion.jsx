import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cn } from '../../lib/utils'

export const Accordion = AccordionPrimitive.Root

export function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      className={cn('border-b border-white/10', className)}
      {...props}
    />
  )
}

export function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          'flex flex-1 items-center justify-between py-4 text-sm font-medium',
          'text-white/80 transition-all hover:text-[#c9a84c]',
          'data-[state=open]:text-[#c9a84c]',
          '[&[data-state=open]>span]:rotate-180',
          'cursor-pointer w-full text-right',
          className
        )}
        {...props}
      >
        {children}
        <span className="inline-block transition-transform duration-200 shrink-0 mr-auto ml-0 text-white/40">
          ▾
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        'overflow-hidden text-sm',
        'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        className
      )}
      {...props}
    >
      <div className="pb-4 pt-0 text-white/70 leading-relaxed">{children}</div>
    </AccordionPrimitive.Content>
  )
}
