import React from 'react';
import { GlobalStyle, theme } from './styles';
import SpotifyWrapper from './components/SpotifyWrapper';
import AppResolver from './components/AppResolver';
import { ThemeProvider } from 'styled-components';

const MainApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <SpotifyWrapper>
        <GlobalStyle />
        <AppResolver />
      </SpotifyWrapper>
    </ThemeProvider>
  );
};

export default MainApp;
