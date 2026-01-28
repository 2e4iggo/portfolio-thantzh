"use client";
import { ITheme, THEME } from '@/utils/theme';
import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContainer, ContentContainer, GlobalStyle } from './AppWrapper.styles';
import AboutMe from '../AboutMe/AboutMe';
import { ILanguageTexts, LANGUAGE } from '@/utils/text';

interface IAppContext {
  theme: ITheme;
  themeType: "light" | "dark";
  toggleTheme: () => void;
  currentLanguage: "en" | "mm";
  toggleLanguage: () => void;
  languageTexts: ILanguageTexts;
}

export const AppContext = createContext<IAppContext | null>(null);

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<"en" | "mm">("en");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "mm" : "en"));
  };

  const appContextValue: IAppContext = {
    theme: THEME[theme],
    themeType: theme,
    languageTexts: LANGUAGE[language],
    toggleTheme,
    toggleLanguage,
    currentLanguage: language,
  };

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

export default AppWrapper;