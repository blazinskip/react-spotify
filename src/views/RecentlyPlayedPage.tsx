import React, { FunctionComponent, useContext } from 'react';
import { useRecentlyPlayed } from '../hooks';
import RecentlyPlayedPageItems from '../components/RecentlyPlayedPageItems';
import BasePageWrapper from '../components/BasePageWrapper';
import SpotifyClientContext from '../context/SpotifyClientContext';

const RecentlyPlayedPage: FunctionComponent = () => {
  const { albums } = useRecentlyPlayed();
  const {
    playerFunctions,
    playerState: { context, paused },
  } = useContext(SpotifyClientContext);

  return (
    <BasePageWrapper title={'Recently Played'}>
      <RecentlyPlayedPageItems
        albums={albums}
        paused={paused}
        playerFunctions={playerFunctions}
        currentPlayedUri={context.uri as string}
      />
    </BasePageWrapper>
  );
};

export default RecentlyPlayedPage;
