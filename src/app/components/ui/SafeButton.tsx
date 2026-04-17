import * as React from "react";

// Helper to filter out Figma inspection props
const filterFigmaProps = <T extends Record<string, any>>(props: T): Partial<T> => {
  const filtered = { ...props };
  Object.keys(filtered).forEach(key => {
    if (key.toLowerCase().startsWith('_fg')) {
      delete filtered[key];
    }
  });
  return filtered;
};

export interface SafeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: never; // Prevent asChild since this is a button
}

/**
 * A button component that automatically filters out Figma inspection props
 * Use this inside DropdownMenuTrigger with asChild pattern
 */
export const SafeButton = React.forwardRef<HTMLButtonElement, SafeButtonProps>(
  (props, ref) => {
    const cleanProps = filterFigmaProps(props);
    return <button ref={ref} {...cleanProps} />;
  }
);

SafeButton.displayName = "SafeButton";
