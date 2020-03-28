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
}

type Props = OwnProps;

const AlbumsSection = styled.section`
  flex-direction: column;
  display: flex;
`;

const getAlbumsTemplate = (albumsHeader: string, albums: ArtistAlbum[], playUri: PlayUriFunction) => {
  return (
    <>
      <h3>{albumsHeader}</h3>
      {albums && albums.map(album => <ArtistPageAlbum key={album.id} album={album} playUri={playUri} />)}
    </>
  );
};

const ArtistPageAlbums: FunctionComponent<Props> = ({ albums, singles, appearsOnAlbums, playUri }: Props) => {
  return (
    <AlbumsSection>
      {albums?.length ? getAlbumsTemplate('Albums', albums, playUri) : null}
      {singles?.length ? getAlbumsTemplate('Singles and EPs', singles, playUri) : null}
      {appearsOnAlbums?.length ? getAlbumsTemplate('Appears On', appearsOnAlbums, playUri) : null}
    </AlbumsSection>
  );
};

export default ArtistPageAlbums;
