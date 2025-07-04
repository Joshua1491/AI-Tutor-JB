"use client";

import { ThemeProvider as NextThemes } from "next-themes";
import { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemes attribute="class" defaultTheme="light" enableSystem>
      {children}
    </NextThemes>
  );
} 