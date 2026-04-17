import React from "react";
import clsx from "clsx";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  size?: "sm" | "md";
  disabled?: boolean;
  isInvalid?: boolean;
  helperText?: string;
  errorMessage?: string;
  showCounter?: boolean;
  maxLength?: number;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export function Input({
  type = "text",
  value,
  onChange,
  placeholder = "",
  size = "md",
  disabled = false,
  isInvalid = false,
  helperText = "",
  errorMessage = "",
  showCounter = false,
  maxLength,
  leftAddon,
  rightAddon,
  icon,
  iconRight,
  className = "",
  ...props
}: InputProps) {
  const inputBase =
    "block w-full border bg-input-background text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition placeholder:text-[var(--text-disabled)]"; // Added placeholder styling

  const stateStyles = clsx({
    "border-border": !isInvalid && !disabled,
    "border-destructive text-destructive focus:ring-destructive focus:border-destructive":
      isInvalid,
    "bg-muted text-muted-foreground border-border cursor-not-allowed": disabled,
  });

  // Size styles using CSS variables from design system
  const sizeStyle: React.CSSProperties = {
    sm: {
      fontSize: 'var(--input-text-size)',
      fontWeight: 'var(--input-text-weight)',
      padding: `var(--spacing-2) var(--spacing-3)`,
      borderRadius: 'var(--input-border-radius)',
    },
    md: {
      fontSize: 'var(--input-text-size)',
      fontWeight: 'var(--input-text-weight)',
      padding: `var(--input-padding-y) var(--input-padding-x)`,
      borderRadius: 'var(--input-border-radius)',
    },
  }[size];

  // Add padding when icon exists
  const inputStyle: React.CSSProperties = {
    ...sizeStyle,
    ...(icon && { paddingLeft: '2.5rem' }), // pl-10 equivalent (40px = 2.5rem)
    ...(iconRight && { paddingRight: '2.5rem' }), // pr-10 equivalent
  };

  const inputClass = clsx(inputBase, stateStyles, className);

  const characterCount =
    showCounter && maxLength ? `${value?.length || 0}/${maxLength}` : null;

  // Addon styles using CSS variables
  const addonStyle = {
    padding: 'var(--spacing-3)',
    fontSize: 'var(--text-sm)',
    borderRadius: 'var(--radius)',
  };

  return (
    <div className="w-full" style={{ gap: 'var(--spacing-1)', display: 'flex', flexDirection: 'column' }}>
      <div className="relative flex shadow-sm" style={{ borderRadius: 'var(--radius)' }}>
        {leftAddon && (
          <span 
            className="inline-flex items-center border border-r-0 border-border bg-muted text-muted-foreground"
            style={{
              ...addonStyle,
              borderTopLeftRadius: 'var(--radius)',
              borderBottomLeftRadius: 'var(--radius)',
              borderTopRightRadius: '0',
              borderBottomRightRadius: '0',
            }}
          >
            {leftAddon}
          </span>
        )}
        <div className="relative flex items-center w-full">
          {icon && (
            <span 
              className="absolute inset-y-0 flex items-center pointer-events-none text-muted-foreground z-10"
              style={{ left: 'var(--spacing-3)' }}
            >
              {icon}
            </span>
          )}
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={clsx(
              inputClass,
              icon && "pl-10",
              iconRight && "pr-10",
              leftAddon && "rounded-l-none",
              rightAddon && "rounded-r-none"
            )}
            style={inputStyle}
            disabled={disabled}
            maxLength={maxLength}
            {...props}
          />
          {iconRight && (
            <span 
              className="absolute inset-y-0 flex items-center pointer-events-none text-muted-foreground"
              style={{ right: 'var(--spacing-3)' }}
            >
              {iconRight}
            </span>
          )}
        </div>
        {rightAddon && (
          <span 
            className="inline-flex items-center border border-l-0 border-border bg-muted text-muted-foreground"
            style={{
              ...addonStyle,
              borderTopRightRadius: 'var(--radius)',
              borderBottomRightRadius: 'var(--radius)',
              borderTopLeftRadius: '0',
              borderBottomLeftRadius: '0',
            }}
          >
            {rightAddon}
          </span>
        )}
      </div>

      {isInvalid && errorMessage && (
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--destructive)' }}>
          {errorMessage}
        </p>
      )}

      {!isInvalid && helperText && (
        <p className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
          {helperText}
        </p>
      )}

      {characterCount && (
        <p className="text-muted-foreground text-right" style={{ fontSize: 'var(--text-sm)' }}>
          {characterCount}
        </p>
      )}
    </div>
  );
}