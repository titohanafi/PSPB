import React, { useRef } from 'react';
import { Upload, File, X } from 'lucide-react';

interface FileUploadProps {
  label: string;
  value?: File | null;
  onChange: (file: File | null) => void;
  placeholder?: string;
  accept?: string;
  helperText?: string;
}

export function FileUpload({
  label,
  value,
  onChange,
  placeholder = "Pilih berkas",
  accept = ".pdf,.doc,.docx",
  helperText
}: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <label 
        className="text-foreground"
        style={{
          fontSize: 'var(--input-label-size)',
          fontWeight: 'var(--input-label-weight)',
          color: 'var(--input-label-color)',
          lineHeight: '22px',
          display: 'block'
        }}
      >
        {label}
      </label>

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />

      {!value ? (
        <button
          type="button"
          onClick={handleClick}
          className="w-full border border-dashed border-border-light rounded bg-input-background text-foreground hover:bg-surface-subdued focus:outline-none focus:ring-2 focus:ring-ring transition-colors flex items-center justify-center gap-2"
          style={{
            fontSize: 'var(--input-text-size)',
            borderRadius: 'var(--input-border-radius)',
            padding: 'var(--input-padding-y) var(--input-padding-x)',
          }}
        >
          <Upload className="w-5 h-5 text-muted-foreground" />
          <span className="text-muted-foreground" style={{ fontSize: 'var(--input-text-size)' }}>
            {placeholder}
          </span>
        </button>
      ) : (
        <div 
          className="w-full px-4 py-3 border border-border-light rounded bg-input-background flex items-center justify-between gap-3"
          style={{
            fontSize: 'var(--input-text-size)',
            borderRadius: 'var(--input-border-radius)',
            padding: 'var(--input-padding-y) var(--input-padding-x)',
          }}
        >
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <File className="w-5 h-5 text-muted-foreground shrink-0" />
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-foreground truncate text-sm">
                {value.name}
              </span>
              <span className="text-muted-foreground text-xs">
                {formatFileSize(value.size)}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="shrink-0 p-1 hover:bg-surface-subdued rounded transition-colors"
            aria-label="Hapus berkas"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      )}

      {helperText && (
        <p 
          className="text-muted-foreground"
          style={{ fontSize: 'var(--text-xs)' }}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}
