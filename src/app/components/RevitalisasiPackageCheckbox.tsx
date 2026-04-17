import svgPaths from "../../imports/svg-nipaa6ie80";

interface RevitalisasiPackageCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  title: string;
  subtitle: string;
  estimatedCost: string;
  luasTapak: string;
  classification: "rusak-ringan" | "rusak-sedang" | "rusak-berat" | "baru";
  nilaiKerusakan?: string;
  description?: string;
}

export function RevitalisasiPackageCheckbox({
  checked,
  onChange,
  title,
  subtitle,
  estimatedCost,
  luasTapak,
  classification,
  nilaiKerusakan,
  description,
}: RevitalisasiPackageCheckboxProps) {
  // Generate unique id from title and subtitle
  const checkboxId = `revitalisasi-${title.toLowerCase()}-${subtitle.toLowerCase().replace(/\s+/g, '-')}`;
  
  const getClassificationIcon = () => {
    if (classification === "rusak-ringan") {
      return (
        <div className="relative shrink-0 size-[24px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g>
              <g>
                <path d={svgPaths.p1ca5c380} fill="var(--icon-default)" />
                <path d="M10 3H14V15H10V3Z" fill="var(--icon-default)" />
              </g>
            </g>
          </svg>
        </div>
      );
    } else if (classification === "rusak-sedang") {
      return (
        <div className="relative shrink-0 size-[24px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g>
              <g>
                <path d={svgPaths.p28611780} fill="var(--warning)" />
                <path d="M7 3H11V15H7V3Z" fill="var(--warning)" />
              </g>
              <g>
                <path d={svgPaths.p1fd3b1f0} fill="var(--warning)" />
                <path d="M13 3H17V15H13V3Z" fill="var(--warning)" />
              </g>
            </g>
          </svg>
        </div>
      );
    } else if (classification === "rusak-berat") {
      return (
        <div className="relative shrink-0 size-[24px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g>
              <g>
                <path d={svgPaths.p1d61f600} fill="var(--critical)" />
                <path d="M4 3H8V15H4V3Z" fill="var(--critical)" />
              </g>
              <g>
                <path d={svgPaths.p1ca5c380} fill="var(--critical)" />
                <path d="M10 3H14V15H10V3Z" fill="var(--critical)" />
              </g>
              <g>
                <path d={svgPaths.p621bcc0} fill="var(--critical)" />
                <path d="M16 3H20V15H16V3Z" fill="var(--critical)" />
              </g>
            </g>
          </svg>
        </div>
      );
    }
    return null;
  };

  const getClassificationText = () => {
    if (classification === "rusak-ringan") return "Klasifikasi: Rusak Ringan";
    if (classification === "rusak-sedang") return "Klasifikasi: Rusak Sedang";
    if (classification === "rusak-berat") return "Klasifikasi: Rusak Berat";
    return "";
  };

  const getLuasTapakIcon = () => {
    if (classification === "baru") {
      return (
        <div className="overflow-clip relative shrink-0 size-[24px]">
          <div className="absolute inset-[8.33%_4.17%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
              <path d={svgPaths.pefd7af0} fill="var(--icon-default)" />
            </svg>
          </div>
        </div>
      );
    }
    return (
      <div className="overflow-clip relative shrink-0 size-[24px]">
        <div className="absolute inset-[3.52%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.31 22.31">
            <path d={svgPaths.p1d511700} fill="var(--icon-default)" />
          </svg>
        </div>
      </div>
    );
  };

  return (
    <div className={`relative rounded-lg shrink-0 w-full transition-colors ${checked ? 'bg-[var(--primary-50)]' : 'bg-card-background'}`}>
      <div className="content-stretch flex gap-3 items-start px-6 py-5 relative w-full">
        {/* Checkbox */}
        <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
          <label htmlFor={checkboxId} className="relative shrink-0 size-5 cursor-pointer">
            <input
              id={checkboxId}
              name={checkboxId}
              type="checkbox"
              checked={checked}
              onChange={(e) => onChange(e.target.checked)}
              className="sr-only peer"
            />
            <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-input-background border border-border border-solid left-1/2 rounded top-1/2 size-[18px] peer-checked:bg-primary peer-checked:border-primary transition-colors">
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
          </label>
        </div>

        {/* Content */}
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-3 items-start min-h-px min-w-px relative">
          {/* Title and Estimated Cost Row */}
          <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-1 items-start">
              <p className="font-semibold leading-[24px] text-foreground" style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semibold)' }}>
                {title}
              </p>
              <p className="font-normal leading-[16px] text-muted-foreground" style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-weight-normal)' }}>
                {subtitle}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <p className="font-normal leading-[20px] text-foreground whitespace-nowrap" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)' }}>
                Estimasi dana yang dibutuhkan:
              </p>
              <p className="font-semibold leading-[20px] whitespace-nowrap" style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--critical)' }}>
                {estimatedCost}
              </p>
            </div>
          </div>

          {/* Luas Tapak */}
          <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full">
            <div className="content-stretch flex gap-1 h-[24px] items-center relative shrink-0">
              {getLuasTapakIcon()}
              <p className="font-normal leading-[20px] text-foreground whitespace-nowrap" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)' }}>
                Luas Tapak Bangunan: {luasTapak}
              </p>
            </div>
          </div>

          {/* Classification and Description (only for non-baru) */}
          {classification !== "baru" && (
            <div className="content-stretch flex flex-col gap-1 items-start justify-center relative shrink-0 w-full">
              <div className="content-stretch flex gap-1 items-center relative shrink-0">
                {getClassificationIcon()}
                <p className="font-normal leading-[20px] text-foreground whitespace-nowrap" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)' }}>
                  {getClassificationText()}
                </p>
                {/* Separator Dot */}
                <div className="h-[4px] relative shrink-0 w-[12px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 4">
                    <circle cx="6" cy="2" fill="var(--icon-default)" r="2" />
                  </svg>
                </div>
                <p className="font-normal leading-[20px] text-foreground whitespace-nowrap" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)' }}>
                  Nilai Kerusakan: {nilaiKerusakan}
                </p>
              </div>
              {description && (
                <p className="font-normal leading-[16px] text-muted-foreground" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)' }}>
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}