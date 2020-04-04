import React, { FunctionComponent } from 'react';
import { Album } from '../models';
import styled from 'styled-components';
import { PausePlayerFunction, PlayUriFunction, ResumePlayerFunction } from '../context';

interface OwnProps {
  readonly albums: Album[];
  readonly playerFunctions: {
    readonly playUri: PlayUriFunction;
    readonly resumePlayer: ResumePlayerFunction;
    readonly pausePlayer: PausePlayerFunction;
  };
  readonly currentPlayedUri: string;
  readonly paused: boolean;
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

const ImagePlayButton = styled.button<{ isCurrentlyPlayedUri: boolean }>`
  position: relative;
  margin-right: 1rem;
  border: none;
  padding: 0;
  height: 160px;
  background: none;

  ${PlayIconWrapper} {
    visibility: ${props => (props.isCurrentlyPlayedUri ? 'visible' : 'hidden')};
    background: ${props => (props.isCurrentlyPlayedUri ? '#190f0fa1' : 'none')};

    span {
      font-size: ${props => (props.isCurrentlyPlayedUri ? '4rem' : '0')};
      color: ${props => (props.isCurrentlyPlayedUri ? 'white' : 'none')};
    }
  }

  &:hover {
    ${PlayIconWrapper} {
      background: #190f0fa1;
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

const RecentlyPlayedPageItems: FunctionComponent<Props> = ({
  albums,
  paused,
  playerFunctions,
  currentPlayedUri,
}: Props) => {
  return (
    <RecentlyPlayedItems>
      {albums &&
        albums.map(({ id, images, name, uri }) => {
          if (currentPlayedUri) {
            if (currentPlayedUri === uri) {
              if (paused) {
                return (
                  <RecentlyPlayedItem key={id}>
                    <ImagePlayButton
                      isCurrentlyPlayedUri={uri === currentPlayedUri}
                      onClick={() => playerFunctions.resumePlayer()}
                    >
                      <PlayIconWrapper>
                        <span className="material-icons">pause</span>
                      </PlayIconWrapper>
                      <RecentlyPlayedAlbumIcon srcSet={images[0].url} alt="" />
                    </ImagePlayButton>

                    <div>{name}</div>
                  </RecentlyPlayedItem>
                );
              } else {
                return (
                  <RecentlyPlayedItem key={id}>
                    <ImagePlayButton
                      isCurrentlyPlayedUri={uri === currentPlayedUri}
                      onClick={() => playerFunctions.pausePlayer()}
                    >
                      <PlayIconWrapper>
                        <span className="material-icons">play_arrow</span>
                      </PlayIconWrapper>
                      <RecentlyPlayedAlbumIcon srcSet={images[0].url} alt="" />
                    </ImagePlayButton>

                    <div>{name}</div>
                  </RecentlyPlayedItem>
                );
              }
            } else {
              return (
                <RecentlyPlayedItem key={id}>
                  <ImagePlayButton
                    isCurrentlyPlayedUri={uri === currentPlayedUri}
                    onClick={() => playerFunctions.playUri({ uri: uri })}
                  >
                    <PlayIconWrapper>
                      <span className="material-icons">play_arrow</span>
                    </PlayIconWrapper>
                    <RecentlyPlayedAlbumIcon srcSet={images[0].url} alt="" />
                  </ImagePlayButton>

                  <div>{name}</div>
                </RecentlyPlayedItem>
              );
            }
          } else {
            return (
              <RecentlyPlayedItem key={id}>
                <ImagePlayButton isCurrentlyPlayedUri={false} onClick={() => playerFunctions.playUri({ uri: uri })}>
                  <PlayIconWrapper>
                    <span className="material-icons">play_arrow</span>
                  </PlayIconWrapper>
                  <RecentlyPlayedAlbumIcon srcSet={images[0].url} alt="" />
                </ImagePlayButton>

                <div>{name}</div>
              </RecentlyPlayedItem>
            );
          }
        })}
    </RecentlyPlayedItems>
  );
};

export default RecentlyPlayedPageItems;
