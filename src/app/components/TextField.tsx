import React from "react";
import clsx from "clsx";

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  required?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showCharacterCount?: boolean;
  maxLength?: number;
}

/**
 * TextField Component
 * 
 * Komponen text field yang fully compliant dengan design system.
 * Menggunakan CSS variables dari /src/styles/theme.css untuk:
 * - Typography (label, input, placeholder)
 * - Spacing (padding, gaps)
 * - Colors (border, text, focus states)
 * - Sizing (height, border radius)
 * 
 * @example
 * ```tsx
 * <TextField 
 *   label="Nama Lengkap"
 *   placeholder="Masukkan nama lengkap Anda"
 *   value={name}
 *   onChange={setName}
 * />
 * ```
 */
export function TextField({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
  disabled = false,
  error = false,
  errorMessage = "",
  helperText = "",
  required = false,
  leftIcon,
  rightIcon,
  showCharacterCount = false,
  maxLength,
  className = "",
  ...props
}: TextFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const characterCount = showCharacterCount && maxLength
    ? `${value?.length || 0}/${maxLength}`
    : null;

  // Input wrapper styles
  const inputWrapperClass = clsx(
    "relative flex items-center w-full transition-colors",
    {
      "opacity-60 cursor-not-allowed": disabled,
    }
  );

  // Input base styles
  const inputClass = clsx(
    "w-full bg-input-background text-foreground border outline-none transition-all",
    "placeholder:text-[var(--text-disabled)]", // Using --text-disabled semantic token for placeholder
    {
      "border-border focus:border-ring focus:ring-2 focus:ring-ring/20": !error && !disabled,
      "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20": error,
      "bg-muted text-muted-foreground border-border cursor-not-allowed": disabled,
      "pl-10": leftIcon,
      "pr-10": rightIcon,
    },
    className
  );

  // Main input styles using CSS variables
  const inputStyle = {
    fontSize: 'var(--input-text-size)',
    fontWeight: 'var(--input-text-weight)',
    padding: 'var(--input-padding-y) var(--input-padding-x)',
    borderRadius: 'var(--input-border-radius)',
    borderWidth: 'var(--input-border-width)',
    lineHeight: '22px', // Fixed line height for consistency
  };

  // Label styles using CSS variables
  const labelStyle = {
    fontSize: 'var(--input-label-size)',
    fontWeight: 'var(--input-label-weight)',
    color: 'var(--input-label-color)',
    marginBottom: 'var(--spacing-2)',
    display: 'block',
    lineHeight: '22px',
  };

  return (
    <div className="w-full flex flex-col" style={{ gap: 'var(--spacing-2)' }}>
      {/* Label */}
      {label && (
        <label style={labelStyle}>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
      )}

      {/* Input Wrapper */}
      <div className={inputWrapperClass}>
        {/* Left Icon */}
        {leftIcon && (
          <span 
            className="absolute left-0 flex items-center pointer-events-none text-muted-foreground"
            style={{ paddingLeft: 'var(--input-padding-x)' }}
          >
            {leftIcon}
          </span>
        )}

        {/* Input Element */}
        <input
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          className={inputClass}
          style={inputStyle}
          aria-invalid={error}
          aria-describedby={
            error && errorMessage
              ? `${props.id}-error`
              : helperText
              ? `${props.id}-helper`
              : undefined
          }
          {...props}
        />

        {/* Right Icon */}
        {rightIcon && (
          <span 
            className="absolute right-0 flex items-center pointer-events-none text-muted-foreground"
            style={{ paddingRight: 'var(--input-padding-x)' }}
          >
            {rightIcon}
          </span>
        )}
      </div>

      {/* Error Message */}
      {error && errorMessage && (
        <p 
          id={`${props.id}-error`}
          className="text-destructive"
          style={{ 
            fontSize: 'var(--helper-size)', 
            lineHeight: 'var(--helper-height)',
            fontWeight: 'var(--helper-weight)'
          }}
        >
          {errorMessage}
        </p>
      )}

      {/* Helper Text */}
      {!error && helperText && (
        <p 
          id={`${props.id}-helper`}
          className="text-muted-foreground"
          style={{ 
            fontSize: 'var(--helper-size)', 
            lineHeight: 'var(--helper-height)',
            fontWeight: 'var(--helper-weight)'
          }}
        >
          {helperText}
        </p>
      )}

      {/* Character Count */}
      {characterCount && (
        <p 
          className="text-muted-foreground text-right"
          style={{ 
            fontSize: 'var(--helper-size)', 
            lineHeight: 'var(--helper-height)',
            fontWeight: 'var(--helper-weight)'
          }}
        >
          {characterCount}
        </p>
      )}
    </div>
  );
}