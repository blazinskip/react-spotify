import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useArtist } from '../hooks';
import ArtistPageHeader from '../components/ArtistPageHeader';
import ArtistPageTopTracks from '../components/ArtistPageTopTracks';
import styled from 'styled-components';
import SpotifyClientContext from '../context/SpotifyClientContext';
import ArtistPageAlbums from '../components/ArtistPageAlbums';
import { ArtistAlbum } from '../models';

const ArtistPageWrapper = styled.div`
  margin-top: 72px;
  max-height: calc(100vh - 232px);
  overflow-y: auto;
`;

const ArtistPage: FunctionComponent = () => {
  const {
    playerFunctions: { playUri },
    playerState: { currentPlayedTrackId },
  } = useContext(SpotifyClientContext);
  const { id } = useParams();
  const { artist } = useArtist(id);
  const [artistAlbums, setArtistAlbums] = useState<ArtistAlbum[]>([]);
  const [singles, setSingles] = useState<ArtistAlbum[]>([]);
  const [appearsOnAlbums, setAppearsOnAlbums] = useState<ArtistAlbum[]>([]);

  const { name, topTracks, uri, albums } = artist;

  useEffect(() => {
    const albumGroupsBy = (albums?.items ?? []).reduce(
      (result, artistAlbum) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        result[artistAlbum.album_group] = [...(result[artistAlbum.album_group] || []), artistAlbum];
        return result;
      },
      { album: [] as ArtistAlbum[], single: [] as ArtistAlbum[], appears_on: [] as ArtistAlbum[] },
    );

    setArtistAlbums(() => albumGroupsBy.album);
    setSingles(() => albumGroupsBy.single);
    setAppearsOnAlbums(() => albumGroupsBy.appears_on);
  }, [albums]);

  return (
    <ArtistPageWrapper>
      <ArtistPageHeader name={name} uri={uri} playUri={playUri} />
      <ArtistPageTopTracks topTracks={topTracks} currentPlayedTrackId={currentPlayedTrackId} />
      <ArtistPageAlbums albums={artistAlbums} singles={singles} playUri={playUri} appearsOnAlbums={appearsOnAlbums} />
    </ArtistPageWrapper>
  );
};

export default ArtistPage;
