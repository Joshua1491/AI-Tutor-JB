import { ReactNode } from "react";
import clsx from "clsx";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Provides a max-width container with default vertical padding so every page
 * looks consistent. Extend by passing additional Tailwind classes via
 * `className`.
 */
export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={clsx("container mx-auto px-4 py-10", className)}>
      {children}
    </div>
  );
}
