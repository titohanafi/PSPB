import * as React from "react";
import clsx from "clsx";

export interface CheckboxProps {
  value?: string;
  children?: React.ReactNode;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  name?: string;
  className?: string;
  controlled?: boolean;
  position?: "normal" | "reverse";
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  labelPosition?: "start" | "end" | "center";
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      value = "",
      name,
      disabled,
      checked,
      invalid,
      indeterminate,
      children,
      className,
      onChange,
      style,
      position = "normal",
      required = false,
      controlled = false,
      labelPosition = "center",
      ...checkboxProps
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = React.useState(checked);

    const internalCheckRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      if (internalCheckRef.current) {
        internalCheckRef.current.indeterminate = !!indeterminate;
      }
    }, [indeterminate]);

    React.useEffect(() => {
      setIsChecked(checked);
    }, [checked]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      if (!controlled) {
        setIsChecked(event.target.checked);
      }
      onChange?.(event);
    }

    return (
      <label
        className={clsx(
          "inline-flex items-center cursor-pointer select-none",
          position === "reverse" && "flex-row-reverse justify-end",
          labelPosition === "start" && "items-start",
          labelPosition === "end" && "items-end",
          labelPosition === "center" && "items-center",
          disabled && "cursor-not-allowed opacity-60",
          className
        )}
        style={style}
      >
        <input
          ref={(el) => {
            internalCheckRef.current = el;
            if (typeof ref === "function") ref(el);
          }}
          type="checkbox"
          name={name}
          value={value}
          checked={!!isChecked}
          disabled={disabled}
          aria-required={required}
          aria-invalid={invalid}
          onChange={handleChange}
          className="sr-only"
          {...checkboxProps}
        />
        <span
          className={clsx(
            "flex items-center justify-center border border-border bg-input-background transition-all duration-200",
            isChecked &&
              'bg-primary border-primary bg-[url("data:image/svg+xml,%3Csvg width=\'14\' height=\'14\' viewBox=\'0 0 14 14\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4.75 10.13L1.62 7 0.56 8.06 4.75 12.25 13.75 3.25 12.69 2.19 4.75 10.13Z\' fill=\'%23F5F5F5\'/%3E%3C/svg%3E")]',
            indeterminate &&
              'bg-primary border-primary bg-[url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' height=\'20px\' viewBox=\'0 0 24 24\' width=\'20px\' fill=\'%23f5f5f5\'%3E%3Cpath d=\'M19 13H5v-2h14v2z\'/%3E%3C/svg%3E")]',
            disabled && "bg-muted border-border"
          )}
          style={{
            width: '18px',
            height: '18px',
            borderRadius: 'var(--radius)',
          }}
        />
        {children && (
          <span 
            className="text-foreground"
            style={{
              marginLeft: 'var(--spacing-2)',
              fontSize: 'var(--text-sm)',
            }}
          >
            {children}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";