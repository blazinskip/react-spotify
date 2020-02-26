import React from 'react';

const SpotifyLoginView = () => {
  const clientId = '484853b958a34028b3c174c9588314b3';
  const redirectUri = 'http://localhost:3000';
  const scopes = ['playlist-read-private', 'user-read-private'];

  const href =
    'https://accounts.spotify.com/authorize' +
    '?response_type=token' +
    '&client_id=' +
    clientId +
    (scopes ? '&scope=' + encodeURIComponent(scopes.join(' ')) : '') +
    '&redirect_uri=' +
    encodeURIComponent(redirectUri);

  return (
    <>
      <a href={href}>Log in</a>
    </>
  );
};

export default SpotifyLoginView;
