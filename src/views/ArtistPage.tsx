import React, { FunctionComponent, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useArtist } from '../hooks';
import ArtistPageHeader from '../components/ArtistPageHeader';
import ArtistPageTopTracks from '../components/ArtistPageTopTracks';
import styled from 'styled-components';
import SpotifyClientContext from '../context/SpotifyClientContext';

const ArtistPageWrapper = styled.div`
  margin-top: 72px;
  max-height: calc(100vh - 232px);
`;

const ArtistPage: FunctionComponent = () => {
  const {
    playerFunctions: { playUri },
    playerState: { currentPlayedTrackId },
  } = useContext(SpotifyClientContext);
  const { id } = useParams();
  const { artist } = useArtist(id);

  const { name, topTracks, uri } = artist;

  return (
    <ArtistPageWrapper>
      <ArtistPageHeader name={name} uri={uri} playUri={playUri} />
      <ArtistPageTopTracks topTracks={topTracks} currentPlayedTrackId={currentPlayedTrackId} />
    </ArtistPageWrapper>
  );
};

export default ArtistPage;
