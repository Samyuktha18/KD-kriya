// src/hooks/theme-provider.tsx
"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { getKriyaDesignTokens } from "@kriyadocs/k-storybook";
import { ThemeProvider, createTheme } from "@mui/material";

interface ThemeContextType {
  themeMode: string;
  setThemeMode: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext<ThemeContextType>({
  themeMode: "light",
  setThemeMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const KriyaDesignThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const storedTheme = typeof window !== "undefined" ? localStorage.getItem("themeMode") : null;
  const defaultThemeMode = "light";

  const getInitialThemeMode = () => {
    return storedTheme ? storedTheme : defaultThemeMode;
  };

  const [themeMode, setThemeMode] = useState<string>(getInitialThemeMode);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("themeMode", themeMode);
    }
  }, [themeMode]);

  const theme = createTheme(getKriyaDesignTokens(themeMode));

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
