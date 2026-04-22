interface PackageCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  title: string;
  description?: string;
  icon: Record<string, string>;
}

export function PackageCheckbox({
  checked,
  onChange,
  title,
  description = "",
  icon,
}: PackageCheckboxProps) {
  const checkboxId = `package-${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <label
      htmlFor={checkboxId}
      className={`relative rounded-lg shrink-0 w-full transition-colors border cursor-pointer block ${checked ? 'border-primary bg-[var(--primary-50)]' : 'border-border-light bg-surface-default hover:bg-surface-subdued'}`}
    >
      <input
        id={checkboxId}
        name={checkboxId}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
      />
      <div className="content-stretch flex gap-3 items-start px-6 py-5 relative w-full">
        <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
          <div className="relative shrink-0 size-5">
            <div
              className="absolute bg-input-background border border-border border-solid rounded peer-checked:bg-primary peer-checked:border-primary transition-colors"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '18px',
                height: '18px',
                borderRadius: 'var(--radius)',
                backgroundColor: checked ? 'var(--color-primary)' : undefined,
                borderColor: checked ? 'var(--color-primary)' : undefined,
              }}
            >
              {checked && (
                <svg
                  className="w-full h-full text-primary-foreground p-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-3 items-start min-h-px min-w-px relative">
          <div className="content-stretch flex gap-3 items-center relative shrink-0 w-full">
            <h4 className="font-normal text-foreground" style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-normal)' }}>
              {title}
            </h4>
          </div>
          {description && (
            <div className="content-stretch flex gap-3 items-start relative shrink-0 w-full">
              <div className="overflow-clip relative shrink-0 size-6">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  {Object.entries(icon).map(([key, path]) => (
                    <path key={key} d={path} fill="var(--icon-default)" />
                  ))}
                </svg>
              </div>
              <p className="flex-1 text-muted-foreground leading-relaxed" style={{ fontSize: 'var(--text-sm)' }}>
                {description}
              </p>
            </div>
          )}
        </div>
      </div>
    </label>
  );
}
