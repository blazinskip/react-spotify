import React from 'react';
import { User } from '../models';

const spotifyTokens = {
  token: '',
  tokenType: '',
  user: null,
} as { token: string | null; tokenType: string | null; user: null | User };

const SpotifyClientContext = React.createContext(spotifyTokens);

export default SpotifyClientContext;
