import React, { useState, useRef, useEffect } from "react";

interface SimpleDropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "start" | "end";
}

/**
 * SimpleDropdownMenu - Custom dropdown tanpa Radix UI untuk menghindari freeze
 */
export function SimpleDropdownMenu({ trigger, children, align = "end" }: SimpleDropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      {isOpen && (
        <div 
          className={`absolute top-full mt-1 z-50 min-w-[200px] bg-surface-default shadow-elevation-sm rounded-md py-1 border border-border ${
            align === "end" ? "right-0" : "left-0"
          }`}
          onClick={() => setIsOpen(false)}
        >
          {children}
        </div>
      )}
    </div>
  );
}

interface SimpleDropdownMenuItemProps {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  label: string;
  onClick: () => void;
  variant?: "default" | "destructive";
  iconSize?: number;
}

export function SimpleDropdownMenuItem({ icon: Icon, label, onClick, variant = "default", iconSize = 20 }: SimpleDropdownMenuItemProps) {
  const colorClasses = variant === "destructive"
    ? "text-[var(--text-critical)] hover:bg-[var(--surface-subdued)]"
    : "text-[var(--text-default)] hover:bg-[var(--surface-subdued)]";

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`w-full flex items-center gap-3 px-4 py-2 ${colorClasses} cursor-pointer whitespace-nowrap`}
      style={{
        fontSize: "var(--action-size)",
        fontWeight: "var(--action-weight)",
        lineHeight: "var(--action-height)",
      }}
    >
      <Icon
        className="shrink-0"
        style={{
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          color: variant === "destructive" ? "var(--icon-critical)" : "var(--icon-default)",
        }}
      />
      {label}
    </button>
  );
}