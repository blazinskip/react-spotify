import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import { useArtist } from '../hooks';
import ArtistPageHeader from '../components/ArtistPageHeader';
import ArtistPageTopTracks from '../components/ArtistPageTopTracks';
import styled from 'styled-components';

const ArtistPageWrapper = styled.div`
  margin-top: 72px;
  max-height: calc(100vh - 232px);
`;

const ArtistPage: FunctionComponent = () => {
  const { id } = useParams();
  const { artist } = useArtist(id);

  const { name, topTracks } = artist;

  return (
    <ArtistPageWrapper>
      <ArtistPageHeader name={name} />
      <ArtistPageTopTracks topTracks={topTracks} />
    </ArtistPageWrapper>
  );
};

export default ArtistPage;
