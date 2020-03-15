import React from 'react';
import { Playlist, User } from '../models';

const spotifyTokens = {
  token: '',
  tokenType: '',
  user: null,
  playlists: [],
  player: null,
  deviceId: '',
} as {
  token: string | null;
  tokenType: string | null;
  user: null | User;
  playlists: Playlist[];
  player: null | Spotify.SpotifyPlayer;
  deviceId: string;
};

const SpotifyClientContext = React.createContext(spotifyTokens);

export default SpotifyClientContext;
