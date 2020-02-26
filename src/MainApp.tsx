import React from 'react';
import { GlobalStyle } from './styles';
import SpotifyWrapper from './components/SpotifyWrapper';
import AppResolver from './components/AppResolver';

const MainApp = () => {
  return (
    <>
      <SpotifyWrapper>
        <GlobalStyle />
        <AppResolver />
      </SpotifyWrapper>
    </>
  );
};

export default MainApp;
