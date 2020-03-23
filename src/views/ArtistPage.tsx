import React, { FunctionComponent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useArtist } from '../hooks';

const ArtistPage: FunctionComponent = () => {
  const { id } = useParams();
  const { artist } = useArtist(id);

  useEffect(() => {
    console.log(artist);
  }, [artist]);

  return <div>Hello From artist view component {id}</div>;
};

export default ArtistPage;
