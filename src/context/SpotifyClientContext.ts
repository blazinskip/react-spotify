import React from 'react';
import { Playlist, User } from '../models';

const spotifyTokens = {
  token: '',
  tokenType: '',
  user: null,
  playlists: [],
} as { token: string | null; tokenType: string | null; user: null | User; playlists: Playlist[] };

const SpotifyClientContext = React.createContext(spotifyTokens);

export default SpotifyClientContext;
