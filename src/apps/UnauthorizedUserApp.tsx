import React from 'react';
import SpotifyLoginView from '../views/SpotifyLoginView';

const UnauthorizedUserApp = () => (
  <>
    <p>User is not logged</p>
    <SpotifyLoginView />
  </>
);

export default UnauthorizedUserApp;
