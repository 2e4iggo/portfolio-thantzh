"use client";
import { ITheme, THEME } from '@/utils/theme';
import React, { createContext, useState, useMemo, useCallback, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContainer, ContentContainer, GlobalStyle } from './AppWrapper.styles';
import AboutMe from '../AboutMe/AboutMe';
import { ILanguageTexts, LANGUAGE } from '@/utils/text';
import { usePathname } from 'next/navigation';

interface IAppContext {
  theme: ITheme;
  themeType: "light" | "dark";
  toggleTheme: () => void;
  currentLanguage: "en" | "fr" | "mm";
  toggleLanguage: () => void;
  languageTexts: ILanguageTexts;
  ishomepage: boolean;
}

export const AppContext = createContext<IAppContext | null>(null);

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<"en" | "fr" | "mm">("en");
  const pathname = usePathname();
  const ishomepage = pathname === "/" || pathname === "/projects";

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Memoized theme toggle function
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  }, []);

  // Memoized language toggle function
  const toggleLanguage = useCallback(() => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "fr" : "en"));
  }, []);

  // Memoize context value to prevent unnecessary re-renders
  const appContextValue = useMemo<IAppContext>(() => ({
    theme: THEME[theme],
    themeType: theme,
    languageTexts: LANGUAGE[language],
    toggleTheme,
    toggleLanguage,
    currentLanguage: language,
    ishomepage
  }), [theme, language, ishomepage, toggleTheme, toggleLanguage]);

  return (
    <AppContext.Provider value={appContextValue}>
      <ThemeProvider theme={THEME[theme]}>
        <GlobalStyle />
        <AppContainer>
          <AboutMe />
          <ContentContainer>{children}</ContentContainer>
        </AppContainer>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default React.memo(AppWrapper);
