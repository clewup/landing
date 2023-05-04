"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <NextThemeProvider attribute="class">{children}</NextThemeProvider>;
};
export default ThemeProvider;
