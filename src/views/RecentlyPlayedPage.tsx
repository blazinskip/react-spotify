import React, { FunctionComponent, useContext } from 'react';
import { useRecentlyPlayed } from '../hooks';
import RecentlyPlayedPageItems from '../components/RecentlyPlayedPageItems';
import BasePageWrapper from '../components/BasePageWrapper';
import SpotifyClientContext from '../context/SpotifyClientContext';

const RecentlyPlayedPage: FunctionComponent = () => {
  const { albums } = useRecentlyPlayed();
  const {
    playerFunctions: { playUri },
  } = useContext(SpotifyClientContext);

  return (
    <BasePageWrapper title={'Recently Played'}>
      <RecentlyPlayedPageItems albums={albums} playUri={playUri} />
    </BasePageWrapper>
  );
};

export default RecentlyPlayedPage;
