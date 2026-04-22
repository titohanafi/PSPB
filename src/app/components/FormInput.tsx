interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  id?: string;
  name?: string;
}

export function FormInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  id,
  name,
}: FormInputProps) {
  // Generate id from label if not provided
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;
  const inputName = name || inputId;
  
  return (
    <div className="flex flex-col gap-1 w-full">
      <label 
        htmlFor={inputId}
        className="text-foreground" 
        style={{ 
          fontSize: 'var(--input-label-size)', 
          fontWeight: 'var(--input-label-weight)',
          color: 'var(--input-label-color)'
        }}
      >
        {label}
      </label>
      <input
        id={inputId}
        name={inputName}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-input-background text-foreground border border-border outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-colors placeholder:text-[var(--text-disabled)]"
        style={{
          fontSize: 'var(--input-text-size)',
          fontWeight: 'var(--input-text-weight)',
          color: 'var(--input-text-color)',
          padding: 'var(--input-padding-y) var(--input-padding-x)',
          borderRadius: 'var(--input-border-radius)',
          borderWidth: 'var(--input-border-width)',
          borderColor: 'var(--border-light)',
        }}
        placeholder={placeholder}
      />
    </div>
  );
}