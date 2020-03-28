import React, { PropsWithChildren, useEffect, useState } from 'react';
import SpotifyClientContext from './SpotifyClientContext';
import { usePlaylists } from '../hooks';
import { PlayerState, PlayUriOptions } from './models';
import { Context } from './index';
import { PlayerTrack } from '../models';
import playerApi from '../api/player.api';

type ContextProviderProps = {
  readonly deviceId: string;
  readonly player: Spotify.SpotifyPlayer;
};

const ContextProvider = ({ children, player, deviceId }: PropsWithChildren<ContextProviderProps>) => {
  const [playlists] = usePlaylists();
  const [playerState, setPlayerState] = useState<PlayerState>({ paused: false, currentPlayedTrackId: '' });
  const [context, setContext] = useState<Context>({ playlists, playerState, playerFunctions: {} } as Context);

  useEffect(() => {
    setContext((context: Context) => ({ ...context, playlists, playerState }));
  }, [playlists, playerState]);

  // on mounted
  useEffect(() => {
    const playerFunctions = {
      playUri: ({ uri, offset }: PlayUriOptions) => playerApi.playUri({ uri, offset, deviceId }),
      resumePlayer: () => player.resume(),
      pausePlayer: () => player.pause(),
      playNextTrack: () => player.nextTrack(),
      playPreviousTrack: () => player.previousTrack(),
    };

    setContext((context: Context) => ({ ...context, playerFunctions }));

    player.on('player_state_changed', ({ track_window: { current_track } }: Spotify.PlaybackState) => {
      const {
        id,
        linked_from: { id: linkedFromId },
      } = current_track as PlayerTrack;

      setPlayerState(playerState => ({ ...playerState, currentPlayedTrackId: linkedFromId ?? id }));

      player.getCurrentState().then(state => {
        if (!state) {
          console.error('User is not playing music through the Web Playback SDK');
          return;
        }

        setPlayerState(playerState => ({ ...playerState, paused: state.paused }));
      });
    });
  }, []);

  return <SpotifyClientContext.Provider value={context}>{children}</SpotifyClientContext.Provider>;
};

export default ContextProvider;
