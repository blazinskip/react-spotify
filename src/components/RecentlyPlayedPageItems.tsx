import React, { FunctionComponent } from 'react';
import { Album } from '../models';
import styled from 'styled-components';
import { PlayUriFunction } from '../context';

interface OwnProps {
  readonly albums: Album[];
  readonly playUri: PlayUriFunction;
}

type Props = OwnProps;

const RecentlyPlayedItems = styled.section`
  display: grid; /* 1 */
  grid-template-columns: repeat(auto-fill, calc(160px + 2rem)); /* 2 */
  grid-gap: 1rem; /* 3 */
`;

const RecentlyPlayedItem = styled.section`
  width: calc(160px + 2rem);
  padding: 0 1rem;
`;

const PlayIconWrapper = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;

  height: 160px;
  width: 160px;
  background: transparent;
  visibility: hidden;

  transition: visibility 0.3ms ease-in-out, background-color 0.3ms ease-in-out;
`;

const ImagePlayButton = styled.button`
  position: relative;
  margin-right: 1rem;
  border: none;
  padding: 0;
  height: 160px;
  background: none;

  &:hover {
    ${PlayIconWrapper} {
      background: rgba(25, 15, 15, 0.63);
      visibility: visible;
    }

    span {
      font-size: 4rem;
      color: white;
    }
  }
`;

const RecentlyPlayedAlbumIcon = styled.img`
  width: 160px;
  height: auto;
  box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`;

const RecentlyPlayedPageItems: FunctionComponent<Props> = ({ albums, playUri }: Props) => {
  return (
    <RecentlyPlayedItems>
      {albums &&
        albums.map(({ id, images, name, uri }) => (
          <RecentlyPlayedItem key={id}>
            <ImagePlayButton onClick={() => playUri({ uri: uri })}>
              <PlayIconWrapper>
                <span className="material-icons">play_arrow</span>
              </PlayIconWrapper>
              <RecentlyPlayedAlbumIcon srcSet={images[0].url} alt="" />
            </ImagePlayButton>

            <div>{name}</div>
          </RecentlyPlayedItem>
        ))}
    </RecentlyPlayedItems>
  );
};

export default RecentlyPlayedPageItems;
