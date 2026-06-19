import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-mono font-bold text-xs uppercase tracking-[0.1em] transition-all duration-200 cursor-pointer';

  const variants = {
    primary:
      'bg-[#c0c0c0] text-[#0a0a0a] border-4 border-[#c0c0c0] px-6 py-3 hover:bg-[#0a0a0a] hover:text-[#c0c0c0] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#c0c0c0]',
    ghost:
      'bg-transparent text-[#c0c0c0] border-2 border-[#8a8a8a] px-6 py-3 hover:border-[#c0c0c0] hover:shadow-[2px_2px_0_#8a8a8a]',
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
