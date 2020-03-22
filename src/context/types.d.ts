import { PlayUriOptions } from './models';

export type PlayUriFunction = (options: PlayUriOptions) => void;
export type ResumePlayerFunction = () => void;
export type PausePlayerFunction = () => void;
export type PlayNextTrackFunction = () => void;
export type PlayPreviousTrackFunction = () => void;
