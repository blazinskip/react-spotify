import React from 'react';
import { BasePrimaryButton } from '../styles';
import styled from 'styled-components';

const Main = styled('main')`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100vh;
`;

const LoginSection = styled('section')`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 10px;
  background: ${props => props.theme.colors.white};
  width: 600px;
  height: 700px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const Header = styled('h1')`
  margin-top: 0;
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 2px;
`;

const SpotifyLoginView = () => {
  const clientId = '725c560413294b43bbae466062fae874';
  const redirectUri = 'http://localhost:3000';
  const scopes = [
    'playlist-read-private',
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-read-recently-played',
    'user-modify-playback-state',
  ];

  const href =
    'https://accounts.spotify.com/authorize' +
    '?response_type=token' +
    '&client_id=' +
    clientId +
    (scopes ? '&scope=' + encodeURIComponent(scopes.join(' ')) : '') +
    '&redirect_uri=' +
    encodeURIComponent(redirectUri);

  return (
    <Main>
      <LoginSection>
        <Header>Spotify Web Client</Header>
        <a href={href}>
          <BasePrimaryButton>Log in</BasePrimaryButton>
        </a>
      </LoginSection>
    </Main>
  );
};

export default SpotifyLoginView;
