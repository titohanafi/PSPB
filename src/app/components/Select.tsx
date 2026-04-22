import { ChevronDown } from "lucide-react";

export interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function Select({
  label,
  options,
  value,
  onChange,
  placeholder = "Pilih",
  className = "",
}: SelectProps) {
  // Label styles using CSS variables from design system
  const labelStyle = {
    fontSize: 'var(--input-label-size)',
    fontWeight: 'var(--input-label-weight)',
    color: 'var(--input-label-color)',
    marginBottom: '4px',
    display: 'block',
  };

  // Select styles using CSS variables from design system
  const selectStyle: React.CSSProperties = {
    padding: `var(--input-padding-y) var(--input-padding-x)`,
    paddingRight: 'var(--spacing-8)', // Extra space for chevron icon
    fontSize: 'var(--input-text-size)',
    borderRadius: 'var(--input-border-radius)',
    color: value ? 'var(--text-default)' : 'var(--text-disabled)', // Dynamic color based on selection
  };

  // Icon container styles using CSS variables
  const iconStyle = {
    right: 'var(--spacing-3)',
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="text-foreground" style={labelStyle}>
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className="block w-full appearance-none border border-border-light bg-input-background text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring transition"
          style={selectStyle}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option disabled value="" style={{ color: 'var(--text-disabled)' }}>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div 
          className="pointer-events-none absolute inset-y-0 flex items-center text-muted-foreground"
          style={iconStyle}
        >
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
