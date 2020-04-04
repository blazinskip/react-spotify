import { PlayerTrack } from '../../models';

export interface PlayerState {
  readonly currentPlayedTrackId: string;
  readonly paused: boolean;
  readonly currentTrack?: PlayerTrack;
  readonly context: {
    readonly metadata: any;
    readonly uri: string | null;
  };
}
