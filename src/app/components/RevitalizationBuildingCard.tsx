import { useState } from "react";
import { Info, ChevronDown, Building2 } from "lucide-react";
import { RevitalizationBuildingInfo } from "../data/packageData";
import { Checkbox } from "./ui/checkbox";

interface RevitalizationBuildingCardProps {
  building: RevitalizationBuildingInfo;
  icon: Record<string, string>;
  isSelected?: boolean;
  onToggle?: (buildingId: string, checked: boolean) => void;
}

export function RevitalizationBuildingCard({
  building,
  icon,
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
    <div className={`relative rounded-lg shrink-0 w-full bg-card-background transition-colors ${
      isSelected ? 'border border-primary' : ''
    }`}>
      <div className={`flex flex-col gap-4 px-6 py-5 w-full rounded-lg ${isSelected ? 'bg-surface-selected-default' : ''}`}>
        {/* Header: Checkbox + Building Name + Info + Estimasi Dana */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Checkbox
              checked={isSelected}
              onCheckedChange={(checked) => onToggle?.(building.id, checked === true ? true : false)}
              className="mt-1"
            />
            <div className="flex flex-col gap-2 flex-1">
              <h4 
                className="font-normal text-foreground" 
                style={{ 
                  fontSize: 'var(--text-base)', 
                  fontWeight: 'var(--font-weight-semibold)' 
                }}
              >
                {building.buildingName}
              </h4>
              
              {/* Info sejajar: Jenis Revitalisasi, Luas Tapak, Keterangan */}
              <div className="flex items-center gap-4 flex-wrap">
                {/* Jenis Revitalisasi */}
                <div className="flex items-center gap-2">
                  <span
                    className="text-foreground font-medium"
                    style={{ 
                      fontSize: 'var(--text-sm)', 
                      fontWeight: 'var(--font-weight-medium)' 
                    }}
                  >
                    {getRevitalizationTypeLabel(building.revitalizationType)}
                  </span>
                  {building.classification && (
                    <>
                      <span className="text-subdued">•</span>
                      <span
                        className="text-foreground font-medium"
                        style={{ 
                          fontSize: 'var(--text-sm)', 
                          fontWeight: 'var(--font-weight-medium)' 
                        }}
                      >
                        {getClassificationLabel(building.classification)}
                      </span>
                    </>
                  )}
                </div>

                {/* Luas Tapak Bangunan */}
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-icon-default" />
                  <p 
                    className="text-subdued" 
                    style={{ 
                      fontSize: 'var(--text-sm)', 
                      fontWeight: 'var(--font-weight-normal)' 
                    }}
                  >
                    {building.buildingArea || 'Data tidak tersedia'}
                  </p>
                </div>

                {/* Keterangan - Expandable */}
                {building.details && building.details.length > 0 && (
                  <button
                    onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
                    className="flex items-center gap-2 text-left group"
                  >
                    <Info className="w-4 h-4 text-icon-default" />
                    <span 
                      className="text-subdued group-hover:text-default transition-colors" 
                      style={{ 
                        fontSize: 'var(--text-sm)', 
                        fontWeight: 'var(--font-weight-medium)' 
                      }}
                    >
                      Keterangan
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-icon-default transition-transform ${
                        isDetailsExpanded ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                )}
              </div>
              
              {/* Expanded Keterangan Content */}
              {isDetailsExpanded && building.details && building.details.length > 0 && (
                <div className="flex flex-col gap-3 pl-6 pt-2">
                  <p 
                    className="text-subdued" 
                    style={{ 
                      fontSize: 'var(--text-sm)', 
                      fontWeight: 'var(--font-weight-normal)',
                      lineHeight: 'var(--line-height-relaxed)' 
                    }}
                  >
                    {building.description}
                  </p>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-1 shrink-0">
            <p 
              className="text-subdued" 
              style={{ 
                fontSize: 'var(--text-xs)', 
                fontWeight: 'var(--font-weight-normal)' 
              }}
            >
              Estimasi Dana
            </p>
            <p 
              className="text-foreground font-semibold" 
              style={{ 
                fontSize: 'var(--text-base)', 
                fontWeight: 'var(--font-weight-semibold)' 
              }}
            >
              {building.estimatedBudget}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}