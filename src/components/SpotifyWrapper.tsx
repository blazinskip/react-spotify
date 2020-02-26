import React, { PropsWithChildren, useEffect, useState } from 'react';
import SpotifyClientContext from '../context/SpotifyClientContext';
import { useGetUserMe } from '../hooks';

const SpotifyWrapper = ({ children }: PropsWithChildren<any>) => {
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
  const [context, setContext] = useState({
    token: localStorage.getItem('token'),
    tokenType: localStorage.getItem('tokenType'),
    user,
  });

  useEffect(() => {
    setContext(state => ({ ...state, user }));
  }, [user]);

  return <SpotifyClientContext.Provider value={context}>{children}</SpotifyClientContext.Provider>;
};

export default SpotifyWrapper;
