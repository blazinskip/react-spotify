import React, { PropsWithChildren, useEffect, useState } from 'react';
import SpotifyClientContext from '../context/SpotifyClientContext';
import { useGetUserMe, usePlaylists, useSpotifyPlayer } from '../hooks';
import { PlayerState, PlayUriOptions } from '../context/models';
import playerApi from '../api/player.api';
import { Context } from '../context';
import { PlayerTrack } from '../models';

const SpotifyWrapper = ({ children }: PropsWithChildren<{}>) => {
  const params = window.location.hash
    .substring(1)
    .split('&')
    .reduce((previousValue, currentValue) => {
      const parts = currentValue.split('=');
      return { ...previousValue, [parts[0]]: decodeURIComponent(parts[1]) };
    }, {}) as { access_token: string; expires_in: number; token_type: string };

  if (params.access_token !== undefined && params.token_type !== undefined) {
    localStorage.setItem('token', params.access_token);
    localStorage.setItem('tokenType', params.token_type);
  }

  const [playerState, setPlayerState] = useState<PlayerState>({ paused: false, currentPlayedTrackId: '' });
  const [user] = useGetUserMe();
  const [playlists] = usePlaylists();
  const { player, deviceId } = useSpotifyPlayer();

  player?.addListener('player_state_changed', () => {
    player?.getCurrentState().then(state => {
      if (!state) {
        console.error('User is not playing music through the Web Playback SDK');
        return;
      }

      setPlayerState(playerState => ({ ...playerState, paused: state.paused }));
    });
  });

  player?.on('player_state_changed', ({ track_window: { current_track } }: Spotify.PlaybackState) => {
    const {
      id,
      linked_from: { id: linkedFromId },
    } = current_track as PlayerTrack;

    setPlayerState(playerState => ({ ...playerState, currentPlayedTrackId: linkedFromId ?? id }));
  });

  const playUri = ({ uri, offset }: PlayUriOptions) => playerApi.playUri({ uri, offset, deviceId });
  const resumePlayer = () => player?.resume();
  const pausePlayer = () => player?.pause();
  const playNextTrack = () => player?.nextTrack();
  const playPreviousTrack = () => player?.previousTrack();

  const [context, setContext] = useState<Context>({
    user,
    playlists,
    deviceId,
    playerState,
    playerFunctions: {
      playUri,
      resumePlayer,
      pausePlayer,
      playNextTrack,
      playPreviousTrack,
    },
  });

  useEffect(() => {
    setContext(state => ({
      ...state,
      user,
      playlists,
      player,
      deviceId,
      playerState,
      playerFunctions: {
        playUri,
        resumePlayer,
        pausePlayer,
        playNextTrack,
        playPreviousTrack,
      },
    }));
  }, [user, playlists, player, deviceId, playerState]);

  return <SpotifyClientContext.Provider value={context}>{children}</SpotifyClientContext.Provider>;
};

export default SpotifyWrapper;
