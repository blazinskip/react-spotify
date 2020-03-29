import React, { FunctionComponent } from 'react';
import { ArtistAlbum } from '../models';
import styled from 'styled-components';
import { PlayUriFunction } from '../context';
import ArtistPageTracks from './ArtistPageTracks';

interface OwnProps {
  readonly album: ArtistAlbum;
  readonly playUri: PlayUriFunction;
  readonly currentPlayedTrackId: string;
}

type Props = OwnProps;

const Album = styled.section`
  flex-direction: column;
  display: flex;
  margin-top: 1rem;
`;

const AlbumInfoWrapper = styled.section`
  display: flex;
`;

const AlbumPlayAlbumIconWrapper = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;

  height: 140px;
  width: 140px;
  background: transparent;
  visibility: hidden;

  transition: visibility 0.3ms ease-in-out, background-color 0.3ms ease-in-out;
`;

const AlbumImageButton = styled.button`
  position: relative;
  margin-right: 1rem;
  border: none;
  padding: 0;
  height: 140px;
  background: none;

  &:hover {
    ${AlbumPlayAlbumIconWrapper} {
      background: rgba(25, 15, 15, 0.63);
      visibility: visible;
    }

    span {
      font-size: 4rem;
      color: white;
    }
  }
`;

const AlbumImage = styled.img`
  height: 140px;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`;

const AlbumInfo = styled.div`
  flex-grow: 1;
`;

const AlbumReleaseDate = styled.small`
  font-weight: 400;
  font-size: 1rem;
  margin: 0;
`;

const AlbumName = styled.h2`
  font-size: 2rem;
  margin: 0;
  font-weight: 100;
`;

const ArtistPageAlbum: FunctionComponent<Props> = ({ album, playUri, currentPlayedTrackId }: Props) => {
  const { uri, name, images, release_date, tracks } = album;

  const releaseDate = release_date.split('-')[0] ?? 'N/A';

  return (
    <Album>
      <AlbumInfoWrapper>
        <AlbumImageButton onClick={() => playUri({ uri })}>
          <AlbumPlayAlbumIconWrapper>
            <span className="material-icons">play_arrow</span>
          </AlbumPlayAlbumIconWrapper>
          <AlbumImage srcSet={images[0].url} alt="" />
        </AlbumImageButton>
        <AlbumInfo>
          <AlbumReleaseDate>{releaseDate}</AlbumReleaseDate>
          <AlbumName>{name}</AlbumName>
        </AlbumInfo>
      </AlbumInfoWrapper>

      <ArtistPageTracks tracks={tracks.items} currentPlayedTrackId={currentPlayedTrackId} />
    </Album>
  );
};

export default ArtistPageAlbum;
