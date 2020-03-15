import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import { usePlaylistById } from '../hooks';
import styled from 'styled-components';

const PlaylistPageWrapper = styled.div`
  display: flex;
`;

const PlaylistInfo = styled.section`
  align-items: center;
  flex-direction: column;
  flex-basis: 40%;
  display: flex;
`;

const PlaylistTracks = styled.section`
  flex-basis: 60%;
`;

const PlaylistPage: FunctionComponent = () => {
  const { id } = useParams();
  const { playlist } = usePlaylistById(id);

  return (
    <PlaylistPageWrapper>
      <PlaylistInfo>
        <img src={playlist?.images[0].url || ''} alt={'Album image'} />
        <h2>{playlist?.name}</h2>
        <button>PLAY</button>
        <p>{playlist?.description}</p>

        <span>{playlist?.tracks.items.length} tracks</span>
      </PlaylistInfo>
      <PlaylistTracks>{playlist?.tracks.items.length}</PlaylistTracks>
    </PlaylistPageWrapper>
  );
};

export default PlaylistPage;
