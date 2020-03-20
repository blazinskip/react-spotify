import { Playlist, User } from '../models';

export interface Context {
  token: string | null;
  tokenType: string | null;
  user: null | User;
  playlists: Playlist[];
  player: null | Spotify.SpotifyPlayer;
  deviceId: string;
  paused: boolean;
  playUri: ({ deviceId: deviceId1, offset, uri }: { uri: string; deviceId: string; offset?: number }) => void;
}
