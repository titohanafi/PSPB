import React from 'react';

interface ContributionPrerequisitesProps {
  title?: string;
  prasyaratSubstansi?: string[];
  prasyaratTeknis?: string[];
  deskripsi?: string;
}

export function ContributionPrerequisites({
  title,
  prasyaratSubstansi,
  prasyaratTeknis,
  deskripsi,
}: ContributionPrerequisitesProps) {
  if (deskripsi) {
    return (
      <p
        className="text-muted-foreground"
        style={{ fontSize: 'var(--text-sm)' }}
      >
        {deskripsi}
      </p>
    );
  }

  if (!prasyaratSubstansi && !prasyaratTeknis) {
    return null;
  }

  return (
    <div className="space-y-3">
      {title && (
        <h5
          className="font-semibold text-foreground"
          style={{ fontSize: 'var(--text-base)' }}
        >
          {title}
        </h5>
      )}

      {prasyaratSubstansi && prasyaratSubstansi.length > 0 && (
        <div className="space-y-1.5">
          <p
            className="font-medium text-foreground"
            style={{ fontSize: 'var(--text-sm)' }}
          >
            Prasyarat Substansi
          </p>
          <ol className="list-decimal list-outside ml-5 space-y-1">
            {prasyaratSubstansi.map((item, index) => (
              <li
                key={index}
                className="text-muted-foreground pl-1"
                style={{ fontSize: 'var(--text-sm)' }}
              >
                {item}
              </li>
            ))}
          </ol>
        </div>
      )}

      {prasyaratTeknis && prasyaratTeknis.length > 0 && (
        <div className="space-y-1.5">
          <p
            className="font-medium text-foreground"
            style={{ fontSize: 'var(--text-sm)' }}
          >
            Prasyarat Teknis
          </p>
          <ol className="list-decimal list-outside ml-5 space-y-1">
            {prasyaratTeknis.map((item, index) => (
              <li
                key={index}
                className="text-muted-foreground pl-1"
                style={{ fontSize: 'var(--text-sm)' }}
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
