import React from "react";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { LucideIcon } from "lucide-react";

interface DropdownMenuItemActionProps {
  /** Icon component dari lucide-react */
  icon: LucideIcon;
  /** Text label untuk menu item */
  label: string;
  /** Handler saat menu item diklik */
  onClick: () => void;
  /** Variant warna - default atau destructive */
  variant?: "default" | "destructive";
  /** Custom className untuk override styling */
  className?: string;
}

/**
 * DropdownMenuItemAction
 * 
 * Komponen menu item untuk dropdown dengan icon dan text yang mengikuti design system.
 * Dioptimalkan untuk consistency dan maintainability.
 * 
 * @example
 * ```tsx
 * <DropdownMenuItemAction
 *   icon={Trash2}
 *   label="Hapus Program"
 *   onClick={() => handleDelete()}
 *   variant="destructive"
 * />
 * ```
 */
export function DropdownMenuItemAction({
  icon: Icon,
  label,
  onClick,
  variant = "default",
  className = "",
}: DropdownMenuItemActionProps) {
  // Warna berdasarkan variant - menggunakan CSS variables dari design system
  const colorClasses = variant === "destructive"
    ? "text-[var(--text-critical)] hover:bg-[var(--surface-subdued)]"
    : "text-[var(--text-default)] hover:bg-[var(--surface-subdued)]";

  return (
    <DropdownMenuItem
      onClick={onClick}
      className={`cursor-pointer px-4 py-2 gap-3 ${colorClasses} ${className}`}
      style={{
        fontSize: "var(--action-size)",
        fontWeight: "var(--action-weight)",
        lineHeight: "var(--action-height)",
      }}
    >
      <Icon
        className="w-5 h-5"
        style={{
          color: variant === "destructive" ? "var(--icon-critical)" : "var(--icon-default)",
        }}
      />
      {label}
    </DropdownMenuItem>
  );
}