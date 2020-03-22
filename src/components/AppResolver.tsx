import React from 'react';
import AuthorizedUserApp from '../apps/AuthorizedUserApp';
import UnauthorizedUserApp from '../apps/UnauthorizedUserApp';
import { useGetUserMe } from '../hooks';

const AppResolver = () => {
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

  if (user) {
    return <AuthorizedUserApp />;
  } else {
    return <UnauthorizedUserApp />;
  }
};

export default AppResolver;
