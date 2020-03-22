import { Playlist, User } from '../models';
import { PlayUriFunction } from './types';
import { PlayerState } from './models';

export interface Context {
  user: null | User;
  playlists: Playlist[];
  player: null | Spotify.SpotifyPlayer;
  deviceId: string;
  readonly playerState: PlayerState;
  readonly playUri: PlayUriFunction;
}
