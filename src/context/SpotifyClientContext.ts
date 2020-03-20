import React from 'react';
import { Playlist, User } from '../models';
import { Context } from './context';

const spotifyTokens = {
  token: '',
  tokenType: '',
  user: null,
  playlists: [],
  player: null,
  deviceId: '',
  paused: false,
} as Context;

const SpotifyClientContext = React.createContext(spotifyTokens);

export default SpotifyClientContext;
