import { Playlist, User } from '../models';
import { PlayUriFunction } from './types';

export interface Context {
  user: null | User;
  playlists: Playlist[];
  player: null | Spotify.SpotifyPlayer;
  deviceId: string;
  paused: boolean;
  readonly playUri: PlayUriFunction;
}
