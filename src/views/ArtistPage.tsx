import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

const ArtistPage: FunctionComponent = () => {
  const { id } = useParams();
  return <div>Hello From artist view component {id}</div>;
};

export default ArtistPage;
