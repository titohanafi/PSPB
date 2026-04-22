import { useState } from "react";
import { Info, ChevronDown, Building2 } from "lucide-react";
import { RevitalizationBuildingInfo } from "../data/packageData";

interface RevitalizationBuildingCardProps {
  building: RevitalizationBuildingInfo;
  icon: Record<string, string>;
  isSelected?: boolean;
  onToggle?: (buildingId: string, checked: boolean) => void;
}

export function RevitalizationBuildingCard({
  building,
  isSelected = false,
  onToggle,
}: RevitalizationBuildingCardProps) {
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);

  const getClassificationLabel = (classification?: 'ringan' | 'sedang' | 'berat') => {
    switch (classification) {
      case 'ringan': return 'Rusak Ringan';
      case 'sedang': return 'Rusak Sedang';
      case 'berat': return 'Rusak Berat';
      default: return '';
    }
  };

  const getRevitalizationTypeLabel = (type: 'rehabilitasi' | 'pembangunan') => {
    return type === 'rehabilitasi' ? 'Rehabilitasi' : 'Pembangunan Gedung Baru';
  };

  return (
    <div
      className={`relative rounded-lg shrink-0 w-full transition-colors border cursor-pointer ${
        isSelected ? 'border-primary bg-[var(--primary-50)]' : 'border-border-light bg-surface-default hover:bg-surface-subdued'
      }`}
      onClick={() => onToggle?.(building.id, !isSelected)}
    >
      <div className="flex flex-col gap-4 px-6 py-5 w-full rounded-lg">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            {/* Visual-only checkbox */}
            <div
              className="mt-1 shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors"
              style={{
                backgroundColor: isSelected ? 'var(--color-primary)' : 'var(--input-background)',
                borderColor: isSelected ? 'var(--color-primary)' : 'var(--border)',
              }}
            >
              {isSelected && (
                <svg className="w-3 h-3 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <h4
                className="text-foreground"
                style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-semibold)'
                }}
              >
                {building.buildingName}
              </h4>

              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-foreground font-medium" style={{ fontSize: 'var(--text-sm)' }}>
                    {getRevitalizationTypeLabel(building.revitalizationType)}
                  </span>
                  {building.classification && (
                    <>
                      <span className="text-subdued">•</span>
                      <span className="text-foreground font-medium" style={{ fontSize: 'var(--text-sm)' }}>
                        {getClassificationLabel(building.classification)}
                      </span>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-icon-default" />
                  <p className="text-subdued" style={{ fontSize: 'var(--text-sm)' }}>
                    {building.buildingArea || 'Data tidak tersedia'}
                  </p>
                </div>

                {building.details && building.details.length > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsDetailsExpanded(!isDetailsExpanded);
                    }}
                    className="flex items-center gap-2 text-left group"
                  >
                    <Info className="w-4 h-4 text-icon-default" />
                    <span className="text-subdued group-hover:text-default transition-colors" style={{ fontSize: 'var(--text-sm)' }}>
                      Keterangan
                    </span>
                    <ChevronDown className={`w-4 h-4 text-icon-default transition-transform ${isDetailsExpanded ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>

              {isDetailsExpanded && building.details && building.details.length > 0 && (
                <div className="flex flex-col gap-3 pl-6 pt-2">
                  <p className="text-subdued" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--line-height-relaxed)' }}>
                    {building.description}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 shrink-0">
            <p className="text-subdued" style={{ fontSize: 'var(--text-xs)' }}>Estimasi Dana</p>
            <p className="text-foreground font-semibold" style={{ fontSize: 'var(--text-base)' }}>
              {building.estimatedBudget}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
