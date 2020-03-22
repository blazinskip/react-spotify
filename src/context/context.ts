import { Playlist } from '../models';
import {
  PausePlayerFunction,
  PlayNextTrackFunction,
  PlayPreviousTrackFunction,
  PlayUriFunction,
  ResumePlayerFunction,
} from './types';
import { PlayerState } from './models';

export interface Context {
  readonly playlists: Playlist[];
  readonly playerState: PlayerState;
  readonly playerFunctions: {
    readonly playUri: PlayUriFunction;
    readonly resumePlayer: ResumePlayerFunction;
    readonly pausePlayer: PausePlayerFunction;
    readonly playNextTrack: PlayNextTrackFunction;
    readonly playPreviousTrack: PlayPreviousTrackFunction;
  };
}
