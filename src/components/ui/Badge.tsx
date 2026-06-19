import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block text-xs tracking-[0.3em] text-[#c0c0c0] uppercase px-3 py-1 border border-[#c0c0c0] font-mono',
        className
      )}
    >
      {children}
    </span>
  );
}
