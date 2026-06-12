import * as ToastPrimitive from '@radix-ui/react-toast'
import { cn } from '../../lib/utils'

export const ToastProvider = ToastPrimitive.Provider
export const ToastViewport = ({ className, ...props }) => (
  <ToastPrimitive.Viewport
    className={cn(
      'fixed bottom-0 left-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4',
      'sm:bottom-0 sm:left-0 sm:flex-col md:max-w-[420px]',
      className
    )}
    {...props}
  />
)

export const Toast = ({ className, ...props }) => (
  <ToastPrimitive.Root
    className={cn(
      'group pointer-events-auto relative flex w-full items-center justify-between',
      'space-x-2 overflow-hidden rounded-md border border-white/10',
      'bg-[#1a1a2e] px-4 py-3 shadow-lg',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[swipe=end]:animate-out data-[state=closed]:fade-out-80',
      'data-[state=closed]:slide-out-to-left-full data-[state=open]:slide-in-from-bottom-full',
      className
    )}
    {...props}
  />
)

export const ToastTitle = ({ className, ...props }) => (
  <ToastPrimitive.Title
    className={cn('text-sm font-semibold text-white', className)}
    {...props}
  />
)

export const ToastDescription = ({ className, ...props }) => (
  <ToastPrimitive.Description
    className={cn('text-sm text-white/60', className)}
    {...props}
  />
)

export const ToastClose = ({ className, ...props }) => (
  <ToastPrimitive.Close
    className={cn(
      'absolute left-2 top-2 rounded-md p-1 text-white/40',
      'opacity-0 transition-opacity hover:text-white',
      'focus:opacity-100 focus:outline-none group-hover:opacity-100',
      className
    )}
    {...props}
  >
    ✕
  </ToastPrimitive.Close>
)

export function useToast() {
  return {
    toast: ({ title, description, duration = 3000 }) => {
      const event = new CustomEvent('shadcn-toast', {
        detail: { title, description, duration },
      })
      window.dispatchEvent(event)
    },
  }
}
