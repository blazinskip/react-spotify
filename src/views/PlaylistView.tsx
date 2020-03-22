import React, { FunctionComponent, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePlaylistById } from '../hooks';
import SpotifyClientContext from '../context/SpotifyClientContext';
import { PlayerTrack } from '../models';
import BaseLoading from '../components/BaseLoading';
import PlaylistPage from '../components/PlaylistPage';

const PlaylistView: FunctionComponent = () => {
  const { id } = useParams();
  const [currentTrackId, setCurrentTrackId] = useState('');
  const { playlist } = usePlaylistById(id);
  const {
    playerFunctions: { playUri, pausePlayer },
  } = useContext(SpotifyClientContext);

  // player?.on('player_state_changed', ({ track_window: { current_track } }: Spotify.PlaybackState) => {
  //   const {
  //     id,
  //     linked_from: { id: linkedFromId },
  //   } = current_track as PlayerTrack;
  //
  //   setCurrentTrackId(() => linkedFromId ?? id);
  // });

  if (playlist) {
    return (
      <PlaylistPage playlist={playlist} currentTrackId={currentTrackId} playUri={playUri} pausePlayer={pausePlayer} />
    );
  } else {
    return <BaseLoading />;
  }
};

export default PlaylistView;
