import React from 'react';
import { GlobalStyle, theme } from './styles';
import AppResolver from './components/AppResolver';
import { ThemeProvider } from 'styled-components';

const MainApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppResolver />
    </ThemeProvider>
  );
};

export default MainApp;
