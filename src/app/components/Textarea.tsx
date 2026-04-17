import * as React from "react";
import clsx from "clsx";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isDisabled?: boolean;
  isInvalid?: boolean;
  helperText?: string;
  errorMessage?: string;
  maxLength?: number;
  counterSlot?: ({
    counter,
    text,
  }: {
    counter: number;
    text: string;
  }) => React.ReactNode;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      isDisabled = false,
      isInvalid = false,
      helperText,
      errorMessage,
      maxLength,
      value,
      onChange,
      counterSlot,
      ...props
    },
    ref
  ) => {
    const [inputLength, setInputLength] = React.useState(0);
    const internalRef = React.useRef<HTMLTextAreaElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInputLength(e.target.value.length);
      onChange?.(e);
    };

    const assignRef = (node: HTMLTextAreaElement | null) => {
      internalRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as React.RefObject<HTMLTextAreaElement>).current = node;
      }
    };

    React.useEffect(() => {
      const val = internalRef.current?.value || "";
      setInputLength(val.length);
    }, []);

    // Textarea styles using CSS variables
    const textareaStyle = {
      padding: 'var(--spacing-3) var(--spacing-4)',
      fontSize: 'var(--text-sm)',
      borderRadius: 'var(--radius)',
    };

    // Helper text styles using CSS variables
    const helperStyle = {
      fontSize: 'var(--text-xs)',
      marginTop: 'var(--spacing-1)',
    };

    return (
      <div className="w-full" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
        <textarea
          ref={assignRef}
          disabled={isDisabled}
          aria-disabled={isDisabled}
          aria-invalid={isInvalid}
          className={clsx(
            "w-full resize-none border transition-colors focus:outline-none",
            "placeholder:text-[var(--text-disabled)]", // Using --text-disabled semantic token for placeholder
            {
              "border-border bg-input-background text-foreground focus:border-ring focus:ring-2 focus:ring-ring":
                !isInvalid && !isDisabled,
              "border-destructive bg-[var(--critical-light)] text-destructive focus:ring-destructive":
                isInvalid,
              "bg-muted text-muted-foreground border-border cursor-not-allowed":
                isDisabled,
            },
            className
          )}
          style={textareaStyle}
          rows={5}
          maxLength={maxLength}
          value={value}
          onChange={handleChange}
          {...props}
        />

        {(helperText || errorMessage || maxLength || counterSlot) && (
          <div 
            className="flex justify-between text-muted-foreground"
            style={helperStyle}
          >
            <span className={clsx({ "text-destructive": isInvalid })}>
              {errorMessage || helperText}
            </span>
            <span className={clsx({ "text-destructive": isInvalid })}>
              {typeof maxLength === "number"
                ? `${inputLength}/${maxLength}`
                : counterSlot?.({
                    counter: inputLength,
                    text: internalRef.current?.value || "",
                  })}
            </span>
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";