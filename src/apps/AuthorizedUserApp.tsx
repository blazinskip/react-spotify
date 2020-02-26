import React, { useContext } from 'react';
import SpotifyClientContext from '../context/SpotifyClientContext';

const AuthorizedUserApp = () => {
  const { user } = useContext(SpotifyClientContext);
  return (
    <>
      <h3>Hello {user?.display_name}</h3>
    </>
  );
};

export default AuthorizedUserApp;
