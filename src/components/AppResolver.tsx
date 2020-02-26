import React, { useContext } from 'react';
import SpotifyClientContext from '../context/SpotifyClientContext';
import AuthorizedUserApp from '../apps/AuthorizedUserApp';
import UnauthorizedUserApp from '../apps/UnauthorizedUserApp';

const AppResolver = () => {
  const { user } = useContext(SpotifyClientContext);
  return user ? <AuthorizedUserApp /> : <UnauthorizedUserApp />;
};

export default AppResolver;
