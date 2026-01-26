"use client";
import {THEME} from '@/utils/theme';
import React,{useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContainer, ContentContainer, GlobalStyle } from './AppWrapper.styles';
import AboutMe from '../AboutMe/AboutMe';

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={THEME[theme]}>
      <GlobalStyle />
      <AppContainer>
        <AboutMe />
        <ContentContainer>{children}</ContentContainer>
      </AppContainer>
    </ThemeProvider>
  );
}
export default AppWrapper;
