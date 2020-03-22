import React from 'react';
import { GlobalStyle, theme } from './styles';
import ContextProvider from './context/ContextProvider';
import AppResolver from './components/AppResolver';
import { ThemeProvider } from 'styled-components';

const MainApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <GlobalStyle />
        <AppResolver />
      </ContextProvider>
    </ThemeProvider>
  );
};

export default MainApp;
