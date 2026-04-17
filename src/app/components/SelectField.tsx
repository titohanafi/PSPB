import React from "react";
import clsx from "clsx";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectFieldProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  required?: boolean;
}

/**
 * SelectField Component
 * 
 * Komponen dropdown/select field yang fully compliant dengan design system.
 * Menggunakan CSS variables dari /src/styles/theme.css untuk:
 * - Typography (label, select text)
 * - Spacing (padding, gaps)
 * - Colors (border, text, focus states)
 * - Sizing (height, border radius)
 * 
 * @example
 * ```tsx
 * <SelectField 
 *   label="Tipe Kontribusi"
 *   placeholder="Pilih tipe kontribusi"
 *   options={[
 *     { label: 'Revitalisasi Sekolah', value: 'revitalisasi' },
 *     { label: 'Renovasi Sekolah', value: 'renovasi' }
 *   ]}
 *   value={selectedType}
 *   onChange={setSelectedType}
 * />
 * ```
 */
export function SelectField({
  label,
  options,
  value,
  onChange,
  placeholder = "Pilih",
  disabled = false,
  error = false,
  errorMessage = "",
  helperText = "",
  required = false,
  className = "",
  ...props
}: SelectFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  // Select wrapper styles
  const selectWrapperClass = clsx(
    "relative w-full",
    {
      "opacity-60 cursor-not-allowed": disabled,
    }
  );

  // Select base styles
  const selectClass = clsx(
    "w-full appearance-none bg-card text-foreground border outline-none transition-all cursor-pointer",
    {
      "border-border focus:border-ring focus:ring-2 focus:ring-ring/20": !error && !disabled,
      "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20": error,
      "bg-muted text-muted-foreground border-border cursor-not-allowed": disabled,
    },
    className
  );

  // Select styles using CSS variables
  const selectStyle: React.CSSProperties = {
    fontSize: 'var(--input-text-size)',
    fontWeight: 'var(--input-text-weight)',
    padding: 'var(--input-padding-y) var(--input-padding-x)',
    paddingRight: 'calc(var(--input-padding-x) + 24px)', // Extra space for chevron icon
    borderRadius: 'var(--input-border-radius)',
    borderWidth: 'var(--input-border-width)',
    lineHeight: '22px', // Fixed line height for consistency
    color: value ? 'var(--text-default)' : 'var(--text-disabled)', // Dynamic color based on selection
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

      {/* Select Wrapper */}
      <div className={selectWrapperClass}>
        {/* Select Element */}
        <select
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className={selectClass}
          style={selectStyle}
          aria-invalid={error}
          aria-describedby={
            error && errorMessage
              ? `${props.id}-error`
              : helperText
              ? `${props.id}-helper`
              : undefined
          }
          {...props}
        >
          {placeholder && (
            <option value="" disabled style={{ color: 'var(--text-disabled)' }}>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Chevron Icon */}
        <div 
          className="absolute inset-y-0 right-0 flex items-center pointer-events-none"
          style={{ paddingRight: 'var(--input-padding-x)' }}
        >
          <svg 
            className="text-icon-secondary" 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none"
          >
            <path 
              d="M5 7.5L10 12.5L15 7.5" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
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
    </div>
  );
}