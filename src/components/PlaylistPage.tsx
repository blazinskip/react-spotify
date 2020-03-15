import React, { FunctionComponent, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { usePlaylistById } from '../hooks';
import styled from 'styled-components';
import playerApi from '../api/player.api';
import SpotifyClientContext from '../context/SpotifyClientContext';
import { msToMinutesAndSeconds } from '../utils';

const PlaylistPageWrapper = styled.div`
  display: flex;
  height: 100%;
  padding-top: 36px;
  text-align: center;
`;

const PlaylistInfo = styled.section`
  align-items: center;
  flex-direction: column;
  flex-basis: 40%;
  display: flex;
`;

const PlaylistTracks = styled.section`
  flex-basis: 60%;
  overflow-y: scroll;
  max-height: calc(100vh - 196px);
`;

const PlaylistPage: FunctionComponent = () => {
  const { id } = useParams();
  const { playlist } = usePlaylistById(id);
  const { deviceId } = useContext(SpotifyClientContext);

  if (playlist) {
    return (
      <PlaylistPageWrapper>
        <PlaylistInfo>
          <img src={playlist?.images[0]?.url ?? ''} alt={'Album image'} />
          <h2>{playlist?.name}</h2>
          <button onClick={() => playerApi.playPlaylist(playlist?.uri, deviceId)}>PLAY</button>
          <span>{playlist?.owner.display_name}</span>
          <p>{playlist?.description}</p>

          <span>{playlist?.tracks.items.length} tracks</span>
        </PlaylistInfo>
        <PlaylistTracks>
          {playlist?.tracks.items.map((item, index) => (
            <div>
              <button onClick={() => playerApi.playPlaylist(playlist?.uri, deviceId, index)}>Play</button>
              <span>{item?.track?.name ?? ''}</span>
              <span>{msToMinutesAndSeconds(item?.track?.duration_ms)}</span>
            </div>
          ))}
        </PlaylistTracks>
      </PlaylistPageWrapper>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default PlaylistPage;
