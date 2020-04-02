import React, { FunctionComponent } from 'react';
import { useRecentlyPlayed } from '../hooks';
import RecentlyPlayedPageItems from '../components/RecentlyPlayedPageItems';
import BasePageWrapper from '../components/BasePageWrapper';

const RecentlyPlayedPage: FunctionComponent = () => {
  const { albums } = useRecentlyPlayed();
  return (
    <BasePageWrapper title={'Recently Played'}>
      <RecentlyPlayedPageItems
        albums={albums}
      />
    </BasePageWrapper>
  );
};

export default RecentlyPlayedPage;
