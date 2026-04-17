import clsx from "clsx";

export interface BadgeProps {
  children: React.ReactNode;
  variant?:
    | "success"
    | "warning"
    | "critical"
    | "informational"
    | "neutral"
    | "expressive-success"
    | "expressive-warning"
    | "expressive-critical"
    | "expressive-informational"
    | "expressive-neutral";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "neutral",
  size = "sm",
  className,
}: BadgeProps) {
  const base = "inline-flex items-center";
  
  // Size styles using CSS variables for spacing
  // All badges now use body-small-bold typography (14px, semibold, 20px line-height)
  const sizeStyle = {
    sm: {
      fontSize: 'var(--body-small-bold-size)',
      fontWeight: 'var(--body-small-bold-weight)',
      lineHeight: 'var(--body-small-bold-height)',
      padding: 'var(--spacing-1) var(--spacing-2)',
      borderRadius: 'var(--radius)',
    },
    md: {
      fontSize: 'var(--body-small-bold-size)',
      fontWeight: 'var(--body-small-bold-weight)',
      lineHeight: 'var(--body-small-bold-height)',
      padding: 'var(--spacing-2) var(--spacing-3)',
      borderRadius: 'var(--radius)',
    },
  }[size];

  const combinedStyle = sizeStyle;

  // Variant styles using CSS variables from theme.css
  const variantClasses: Record<string, string> = {
    // Light variants (subtle backgrounds)
    success: "bg-[var(--success-light)] text-[var(--success-light-foreground)]",
    warning: "bg-[var(--warning-light)] text-[var(--warning-light-foreground)]",
    critical: "bg-[var(--critical-light)] text-[var(--critical-light-foreground)]",
    informational: "bg-[var(--info-light)] text-[var(--info-light-foreground)]",
    neutral: "bg-muted text-muted-foreground",
    
    // Expressive variants (bold backgrounds)
    "expressive-success": "bg-[var(--success)] text-[var(--success-foreground)]",
    "expressive-warning": "bg-[var(--warning)] text-[var(--warning-foreground)]",
    "expressive-critical": "bg-[var(--critical)] text-[var(--critical-foreground)]",
    "expressive-informational": "bg-[var(--info)] text-[var(--info-foreground)]",
    "expressive-neutral": "bg-foreground text-background",
  };

  return (
    <span 
      className={clsx(base, variantClasses[variant], className)}
      style={combinedStyle}
    >
      {children}
    </span>
  );
}