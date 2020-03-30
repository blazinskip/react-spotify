import React, { FunctionComponent } from 'react';
import { useRecentlyPlayed } from '../hooks';
import RecentlyPlayedPageItems from '../components/RecentlyPlayedPageItems';

const RecentlyPlayedPage: FunctionComponent = () => {
  const { albums } = useRecentlyPlayed();
  return <RecentlyPlayedPageItems albums={[...albums, ...albums, ...albums]} />;
};

export default RecentlyPlayedPage;
