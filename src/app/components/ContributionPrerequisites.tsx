import React from 'react';

interface ContributionPrerequisitesProps {
  prasyaratSubstansi?: string[];
  prasyaratTeknis?: string[];
  deskripsi?: string;
}

export function ContributionPrerequisites({ 
  prasyaratSubstansi, 
  prasyaratTeknis,
  deskripsi 
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
      className="p-4 rounded-lg border border-border space-y-4"
      style={{ backgroundColor: '#FAFAFA' }}
    >
      {prasyaratSubstansi && prasyaratSubstansi.length > 0 && (
        <div>
          <h5 
            className="font-semibold text-foreground mb-2"
            style={{ fontSize: 'var(--text-base)' }}
          >
            Prasyarat Substansi
          </h5>
          <ol className="list-decimal list-outside ml-5 space-y-1.5">
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
        </div>
      )}

      {prasyaratTeknis && prasyaratTeknis.length > 0 && (
        <div>
          <h5 
            className="font-semibold text-foreground mb-2"
            style={{ fontSize: 'var(--text-base)' }}
          >
            Prasyarat Teknis
          </h5>
          <ol className="list-decimal list-outside ml-5 space-y-1.5">
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
        </div>
      )}
    </div>
  );
}
