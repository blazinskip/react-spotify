import React, { FunctionComponent } from 'react';
import { ArtistAlbum, Page } from '../models';
import styled from 'styled-components';
import ArtistPageAlbum from './ArtistPageAlbum';
import { PlayUriFunction } from '../context';

interface OwnProps {
  readonly albums: ArtistAlbum[];
  readonly singles: ArtistAlbum[];
  readonly appearsOnAlbums: ArtistAlbum[];
  readonly playUri: PlayUriFunction;
  readonly currentPlayedTrackId: string;
}

type Props = OwnProps;

const AlbumsSection = styled.section`
  flex-direction: column;
  display: flex;
`;

const getAlbumsTemplate = (
  albumsHeader: string,
  albums: ArtistAlbum[],
  playUri: PlayUriFunction,
  currentPlayedTrackId: string,
) => {
  return (
    <>
      <h3>{albumsHeader}</h3>
      {albums &&
        albums.map(album => (
          <ArtistPageAlbum key={album.id} album={album} playUri={playUri} currentPlayedTrackId={currentPlayedTrackId} />
        ))}
    </>
  );
};

const ArtistPageAlbums: FunctionComponent<Props> = ({
  albums,
  singles,
  appearsOnAlbums,
  playUri,
  currentPlayedTrackId,
}: Props) => {
  return (
    <AlbumsSection>
      {albums?.length ? getAlbumsTemplate('Albums', albums, playUri, currentPlayedTrackId) : null}
      {singles?.length ? getAlbumsTemplate('Singles and EPs', singles, playUri, currentPlayedTrackId) : null}
      {appearsOnAlbums?.length ? getAlbumsTemplate('Appears On', appearsOnAlbums, playUri, currentPlayedTrackId) : null}
    </AlbumsSection>
  );
};

export default ArtistPageAlbums;
