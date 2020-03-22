import { Playlist, User } from '../models';
import {
  ResumePlayerFunction,
  PlayUriFunction,
  PausePlayerFunction,
  PlayNextTrackFunction,
  PlayPreviousTrackFunction,
} from './types';
import { PlayerState } from './models';

export interface Context {
  user: null | User;
  playlists: Playlist[];
  deviceId: string;
  readonly playerState: PlayerState;
  readonly playerFunctions: {
    readonly playUri: PlayUriFunction;
    readonly resumePlayer: ResumePlayerFunction;
    readonly pausePlayer: PausePlayerFunction;
    readonly playNextTrack: PlayNextTrackFunction;
    readonly playPreviousTrack: PlayPreviousTrackFunction;
  };
}
