import React, { FunctionComponent, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { usePlaylistById } from '../hooks';
import SpotifyClientContext from '../context/SpotifyClientContext';
import BaseLoading from '../components/BaseLoading';
import PlaylistPage from '../components/PlaylistPage';

const PlaylistView: FunctionComponent = () => {
  const { id } = useParams();
  const { playlist } = usePlaylistById(id);
  const {
    playerState: { currentPlayedTrackId },
    playerFunctions: { playUri, pausePlayer },
  } = useContext(SpotifyClientContext);

  if (playlist) {
    return (
      <PlaylistPage
        playlist={playlist}
        currentTrackId={currentPlayedTrackId}
        playUri={playUri}
        pausePlayer={pausePlayer}
      />
    );
  } else {
    return <BaseLoading />;
  }
};

export default PlaylistView;
