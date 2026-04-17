import React from "react";
import clsx from "clsx";
import svgPaths from "../../imports/svg-cfrrafuqrg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  color?: "blue" | "black" | "white" | "red";
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "ghost";
  disabled?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  iconOnly?: boolean;
  closeButton?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  iconPosition?: "left" | "right";
}

// Spinner component from Figma
function Spinner() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Spinner">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="Spinner">
        <div className="absolute left-[3px] size-[18px] top-[3px]" data-name="Base">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p161c900} fill="#D9DBDD" id="Base" />
          </svg>
        </div>
        <div className="absolute flex items-center justify-center left-[3px] size-[18px] top-[3px] animate-spin">
          <div className="flex-none">
            <div className="relative size-[18px]" data-name="Fill">
              <div className="absolute bottom-1/2 left-0 right-0 top-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 9">
                  <path d={svgPaths.pe93a992} fill="#91BCFD" id="Fill" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Button({
  children,
  color = "blue",
  size = "md",
  variant = "solid",
  disabled = false,
  isLoading = false,
  fullWidth = false,
  iconOnly = false,
  closeButton = false,
  icon: Icon,
  iconPosition = "left",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center transition-colors focus:outline-none disabled:pointer-events-none";

  // Close button special styling
  const closeButtonStyles = closeButton
    ? "bg-card hover:bg-card/80 hover:backdrop-blur-sm"
    : "";

  const colorStyles = {
    // Primary button - matches Figma exactly with all states
    blue: clsx(
      "bg-primary text-primary-foreground",
      "hover:bg-primary-hover",
      "active:bg-accent",
      "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:bg-border-light disabled:text-muted-foreground"
    ),
    // Secondary button (black/foreground)
    black: clsx(
      "bg-foreground text-background",
      "hover:bg-foreground/90",
      "active:bg-foreground/80",
      "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:bg-border-light disabled:text-muted-foreground"
    ),
    // Tertiary button (white/surface-default)
    white: clsx(
      "bg-[var(--surface-default)] text-[var(--text-default)] border border-[var(--border-default)]",
      "hover:bg-[var(--surface-subdued)]",
      "active:bg-[var(--surface-pressed)]",
      "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:bg-border-light disabled:text-muted-foreground disabled:border-border-light"
    ),
    // Destructive button
    red: clsx(
      "bg-destructive text-destructive-foreground",
      "hover:bg-destructive/90",
      "active:bg-destructive/80",
      "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:bg-border-light disabled:text-muted-foreground"
    ),
  };

  const sizeStyles = {
    sm: "h-8 text-sm",
    md: "h-10 text-base",
    lg: "h-12 text-lg",
  };

  const variantStyles = {
    solid: "",
    ghost: "bg-transparent hover:bg-muted",
  };

  const iconOnlyStyles = iconOnly ? "" : "";
  const fullWidthStyles = fullWidth ? "w-full" : "w-auto";
  const loadingStyles = isLoading ? "relative" : "";

  const classes = clsx(
    baseStyles,
    closeButton ? closeButtonStyles : colorStyles[color],
    closeButton ? "" : sizeStyles[size],
    closeButton ? "" : variantStyles[variant],
    iconOnlyStyles,
    fullWidthStyles,
    loadingStyles,
    className
  );

  // Calculate padding using CSS variables based on size
  const paddingStyle = closeButton
    ? { padding: 'var(--spacing-2)' }
    : {
        sm: { padding: 'var(--spacing-2) var(--spacing-3)' },
        md: { padding: 'var(--spacing-3) var(--spacing-5)' },
        lg: { padding: 'var(--spacing-4) var(--spacing-6)' },
      }[size];

  // Font weight using CSS variable
  const fontStyle = {
    fontWeight: 'var(--font-weight-semibold)',
  };

  // Border radius using CSS variable
  const borderRadiusStyle = closeButton
    ? { borderRadius: '9999px' }
    : { borderRadius: 'var(--radius-button)' };

  const combinedStyle = {
    ...paddingStyle,
    ...fontStyle,
    ...borderRadiusStyle,
  };

  return (
    <button 
      className={classes} 
      disabled={disabled || isLoading} 
      style={combinedStyle}
      {...props}
    >
      {isLoading && (
        <>
          <Spinner />
          {children && <span className="ml-1" />}
        </>
      )}
      {!isLoading && Icon && iconPosition === "left" && <Icon className={clsx("w-4 h-4", children && "mr-2")} />}
      {closeButton ? children : (!iconOnly && children)}
      {!isLoading && Icon && iconPosition === "right" && <Icon className={clsx("w-4 h-4", children && "ml-2")} />}
    </button>
  );
}