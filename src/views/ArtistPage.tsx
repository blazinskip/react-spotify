import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import { useArtist } from '../hooks';
import ArtistPageHeader from '../components/ArtistPageHeader';

const ArtistPage: FunctionComponent = () => {
  const { id } = useParams();
  const { artist } = useArtist(id);

  const { name } = artist;

  return (
    <div>
      <ArtistPageHeader name={name} />
    </div>
  );
};

export default ArtistPage;
