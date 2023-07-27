import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
  {
    variants: {
      variant: {
        gray: 'bg-gray-400/10 text-gray-400 ring-gray-400/20',
        red: 'bg-red-400/10 text-red-400 ring-red-400/20',
        yellow: 'bg-yellow-400/10 text-yellow-400 ring-yellow-400/20',
        green: 'bg-green-400/10 text-green-400 ring-green-400/20',
        blue: 'bg-blue-400/10 text-blue-400 ring-blue-400/20',
        indigo: 'bg-indigo-400/10 text-indigo-400 ring-indigo-400/20',
        purple: 'bg-purple-400/10 text-purple-400 ring-purple-400/20',
        pink: 'bg-pink-400/10 text-pink-400 ring-pink-400/20'
      }
    },
    defaultVariants: {
      variant: 'gray'
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

const Badge = React.forwardRef<HTMLButtonElement, BadgeProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'span';
    return (
      <Comp
        className={cn(badgeVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
