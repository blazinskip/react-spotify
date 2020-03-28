import React, { FunctionComponent } from 'react';
import { ArtistAlbum, Page } from '../models';
import styled from 'styled-components';
import ArtistPageAlbum from './ArtistPageAlbum';

interface OwnProps {
  albums: Page<ArtistAlbum>;
}

type Props = OwnProps;

const AlbumsSection = styled.section`
  flex-direction: column;
  display: flex;
`;

const ArtistPageAlbums: FunctionComponent<Props> = ({ albums }: Props) => {
  return (
    <AlbumsSection>
      <h3>Albums</h3>
      {albums && albums.items.map(album => <ArtistPageAlbum key={album.id} album={album} />)}
    </AlbumsSection>
  );
};

export default ArtistPageAlbums;
