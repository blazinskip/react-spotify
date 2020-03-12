import React, { PropsWithChildren, useEffect, useState } from 'react';
import SpotifyClientContext from '../context/SpotifyClientContext';
import { useGetUserMe, usePlaylists } from '../hooks';

const SpotifyWrapper = ({ children }: PropsWithChildren<{}>) => {
  const params = window.location.hash
    .substring(1)
    .split('&')
    .reduce((previousValue, currentValue) => {
      const parts = currentValue.split('=');
      return { ...previousValue, [parts[0]]: decodeURIComponent(parts[1]) };
    }, {}) as { access_token: string; expires_in: number; token_type: string };

  if (params.access_token !== undefined && params.token_type !== undefined) {
    localStorage.setItem('token', params.access_token);
    localStorage.setItem('tokenType', params.token_type);
  }

  const [user] = useGetUserMe();
  const [playlists] = usePlaylists();
  const [context, setContext] = useState({
    token: localStorage.getItem('token'),
    tokenType: localStorage.getItem('tokenType'),
    user,
    playlists,
  });

  useEffect(() => {
    setContext(state => ({ ...state, user, playlists }));
  }, [user, playlists]);

  return <SpotifyClientContext.Provider value={context}>{children}</SpotifyClientContext.Provider>;
};

export default SpotifyWrapper;
