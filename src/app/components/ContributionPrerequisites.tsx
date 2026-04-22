import React from 'react';

interface ContributionPrerequisitesProps {
  title?: string;
  prasyaratSubstansi?: string[];
  prasyaratTeknis?: string[];
  deskripsi?: string;
  isOpenSubstansi?: boolean;
  isOpenTeknis?: boolean;
  onToggleSubstansi?: () => void;
  onToggleTeknis?: () => void;
}

export function ContributionPrerequisites({ 
  title,
  prasyaratSubstansi, 
  prasyaratTeknis,
  deskripsi,
  isOpenSubstansi = true,
  isOpenTeknis = true,
  onToggleSubstansi,
  onToggleTeknis
}: ContributionPrerequisitesProps) {
  // Jika ada deskripsi (untuk Kebutuhan Pendidikan Lainnya)
  if (deskripsi) {
    return (
      <div 
        className="p-4 rounded-lg border border-border"
        style={{ backgroundColor: '#FAFAFA' }}
      >
        <p 
          className="text-muted-foreground"
          style={{ fontSize: '14px' }}
        >
          {deskripsi}
        </p>
      </div>
    );
  }

  // Jika ada prasyarat (untuk program lainnya)
  if (!prasyaratSubstansi && !prasyaratTeknis) {
    return null;
  }

  return (
    <div 
      className="p-4 rounded-lg border border-border space-y-3"
      style={{ backgroundColor: '#FAFAFA' }}
    >
      {title && (
        <h5 
          className="font-semibold text-foreground"
          style={{ fontSize: '14px' }}
        >
          {title}
        </h5>
      )}
      
      {/* Prasyarat Substansi - Collapsible */}
      {prasyaratSubstansi && prasyaratSubstansi.length > 0 && (
        <div>
          <button
            type="button"
            onClick={onToggleSubstansi}
            className="w-full flex items-center justify-between py-2 hover:opacity-80 transition-opacity"
          >
            <h5 
              className="font-medium text-foreground"
              style={{ fontSize: '14px' }}
            >
              Prasyarat Substansi
            </h5>
            <svg 
              className={`w-4 h-4 text-foreground transition-transform ${isOpenSubstansi ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isOpenSubstansi && (
            <ol className="list-decimal list-outside ml-5 space-y-1.5 mt-2">
              {prasyaratSubstansi.map((item, index) => (
                <li 
                  key={index}
                  className="text-muted-foreground pl-2"
                  style={{ fontSize: '14px' }}
                >
                  {item}
                </li>
              ))}
            </ol>
          )}
        </div>
      )}

      {/* Prasyarat Teknis - Collapsible */}
      {prasyaratTeknis && prasyaratTeknis.length > 0 && (
        <div>
          <button
            type="button"
            onClick={onToggleTeknis}
            className="w-full flex items-center justify-between py-2 hover:opacity-80 transition-opacity"
          >
            <h5 
              className="font-medium text-foreground"
              style={{ fontSize: '14px' }}
            >
              Prasyarat Teknis
            </h5>
            <svg 
              className={`w-4 h-4 text-foreground transition-transform ${isOpenTeknis ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isOpenTeknis && (
            <ol className="list-decimal list-outside ml-5 space-y-1.5 mt-2">
              {prasyaratTeknis.map((item, index) => (
                <li 
                  key={index}
                  className="text-muted-foreground pl-2"
                  style={{ fontSize: '14px' }}
                >
                  {item}
                </li>
              ))}
            </ol>
          )}
        </div>
      )}
    </div>
  );
}
