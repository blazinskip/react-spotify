import React, { useContext } from 'react';
import SpotifyClientContext from '../context/SpotifyClientContext';

const HomeView = () => {
  const { user } = useContext(SpotifyClientContext);

  return (
    <>
      <h2> Home Section</h2>
      <h3>Hello {user?.display_name}</h3>
    </>
  );
};

export default HomeView;