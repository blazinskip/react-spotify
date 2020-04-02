import React, { FunctionComponent } from 'react';
import { Album } from '../models';
import styled from 'styled-components';

interface OwnProps {
  readonly albums: Album[];
}

type Props = OwnProps;

const Items = styled.section`
  display: grid; /* 1 */
  grid-template-columns: repeat(auto-fill, calc(160px + 2rem)); /* 2 */
  grid-gap: 1rem; /* 3 */
`;

const Item = styled.section`
  width: calc(160px + 2rem);
  padding: 0 1rem;

  img {
    width: 160px;
    height: auto;
  }
`;

const ImageWrapper = styled.div`
  height: 160px;
  width: 160px;
`;

const RecentlyPlayedPageItems: FunctionComponent<Props> = ({ albums }: Props) => {
  return (
    <Items>
      {albums &&
        albums.map(album => (
          <Item key={album.id}>
            <ImageWrapper>
              <img srcSet={album?.images[0].url ?? ''} alt="" />
            </ImageWrapper>
            <div>{album.name}</div>
            <div>{album.description}</div>
          </Item>
        ))}
    </Items>
  );
};

export default RecentlyPlayedPageItems;
