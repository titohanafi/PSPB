import { X } from "lucide-react";
import { Button } from "./Button";
import React, { useState } from "react";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ borderRadius: 'var(--radius-card)' }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border-light px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-foreground" style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-semibold)' }}>
            Tambah Program Kontribusi
          </h2>
          <Button closeButton onClick={onClose} aria-label="Tutup">
            <X className="w-6 h-6 text-foreground" />
          </Button>
        </div>

        <div className="p-6 bg-default">
          {/* Info banner */}
          <div className="flex items-center gap-3 bg-surface-informational-default border border-border-light rounded p-4 mb-4">
            <div className="flex-shrink-0 w-5 h-5 text-icon-informational">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                <path d="M9 18h6" />
                <path d="M10 22h4" />
              </svg>
            </div>
            <p className="text-body-small text-informational">
              Program yang sudah dipilih tidak dapat ditambahkan kembali
            </p>
          </div>

          <div className="grid grid-cols-2 gap-spacing-4">
            {cardDetails.map((card, index) => {
              const isAlreadySelected = selectedProgram.includes(index);
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  className={`overflow-hidden relative rounded-card flex flex-col gap-spacing-3 p-spacing-5 transition-colors border ${
                    isAlreadySelected
                      ? 'border-border-light bg-surface-subdued opacity-50 cursor-not-allowed'
                      : isHovered
                      ? 'border-border-light bg-surface-subdued cursor-pointer'
                      : 'border-border-light bg-surface-default cursor-pointer'
                  }`}
                  onMouseEnter={() => !isAlreadySelected && setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => {
                    if (!isAlreadySelected) {
                      onSelectProgram(index);
                    }
                  }}
                >
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

                    {isAlreadySelected && (
                      <div className="shrink-0 bg-primary text-primary-foreground rounded-full w-7 h-7 flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Deskripsi */}
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
