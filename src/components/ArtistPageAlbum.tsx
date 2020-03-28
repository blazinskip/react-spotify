import React, { FunctionComponent } from 'react';
import { ArtistAlbum } from '../models';
import styled from 'styled-components';

interface OwnProps {
  album: ArtistAlbum;
}

type Props = OwnProps;

const AlbumSection = styled.section``;

const ArtistPageAlbum: FunctionComponent<Props> = ({ album }: Props) => {
  const { name } = album;

  return <AlbumSection>{name}</AlbumSection>;
};

export default ArtistPageAlbum;
