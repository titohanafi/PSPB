import { X } from "lucide-react";
import { Button } from "./Button";
import React from "react";

interface ProgramSelectionModalProps {
  show: boolean;
  onClose: () => void;
  cardDetails: Array<{
    category: string;
    title: string;
    description: string;
    imageUrl: string;
  }>;
  selectedProgram: number[];
  onSelectProgram: (index: number) => void;
  ProgramIllustration: React.ComponentType<{ title: string }>;
}

export function ProgramSelectionModal({
  show,
  onClose,
  cardDetails,
  selectedProgram,
  onSelectProgram,
  ProgramIllustration
}: ProgramSelectionModalProps) {
  if (!show) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-card rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ borderRadius: 'var(--radius-card)' }}
      >
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-foreground" style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-semibold)' }}>
            Pilih Program Kontribusi
          </h2>
          <Button
            closeButton
            onClick={onClose}
            aria-label="Tutup"
          >
            <X className="w-6 h-6 text-foreground" />
          </Button>
        </div>
        
        <div className="p-6 bg-default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-spacing-4">
            {cardDetails.map((card, index) => {
              // Modal selalu dimulai tanpa pilihan - tidak ada checkmark
              const isSelected = false;
              
              return (
                <div 
                  key={index}
                  className={`overflow-hidden relative group cursor-pointer rounded-card border border-border-light flex flex-col gap-spacing-3 p-spacing-5 transition-colors hover:bg-[var(--surface-hovered)] active:bg-[var(--surface-pressed)] bg-surface-default`}
                  onClick={() => onSelectProgram(index)}
                >
                  {/* Gambar */}
                  {card.imageUrl && (
                    <div className="w-full h-40 overflow-hidden rounded-md">
                      <img 
                        src={card.imageUrl} 
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Title dengan Icon */}
                  <div className="flex items-center gap-spacing-3">
                    <div className="relative flex items-center justify-center shrink-0 w-11 h-11 transition-all">
                      <ProgramIllustration title={card.title} />
                    </div>
                    
                    <div 
                      className="font-semibold flex-1 text-foreground"
                      style={{ 
                        fontSize: 'var(--text-lg)',
                        lineHeight: 'var(--heading-medium-height)',
                      }}
                    >
                      {card.title}
                    </div>
                    
                    {/* Checkmark Badge - sejajar dengan title */}
                    {isSelected && (
                      <div className="shrink-0 shadow-sm bg-primary text-primary-foreground rounded-full w-7 h-7 flex items-center justify-center">
                        <svg 
                          className="w-4 h-4"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Deskripsi Full Width */}
                  <div className="text-body-small text-subdued">
                    {card.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}