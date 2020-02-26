import React, { PropsWithChildren, useEffect, useState } from 'react';
import SpotifyClientContext from '../context/SpotifyClientContext';
import axios from 'axios';

function useGetUserMe(): [any | null] {
  const [user, setUser] = useState<any | null>(null);

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

  useEffect(() => {
    const getUserProfile = async () => {
      const token = localStorage.getItem('token');
      const tokenType = localStorage.getItem('tokenType');
      if (token && tokenType) {
        const { data } = await axios(' https://api.spotify.com/v1/me', {
          headers: {
            Authorization: `${tokenType} ${token}`,
          },
        });
        setUser(() => data);
      } else {
        setUser(() => null);
      }
    };
    getUserProfile();
  }, [params.access_token, params.token_type, params.expires_in]);

  return [user];
}

const SpotifyWrapper = ({ children }: PropsWithChildren<any>) => {
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
