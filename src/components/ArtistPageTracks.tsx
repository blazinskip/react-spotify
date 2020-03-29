import React, { FunctionComponent } from 'react';
import { ArtistAlbumTrack } from '../models';
import styled from 'styled-components';
import { msToMinutesAndSeconds } from '../utils';

interface OwnProps {
  readonly tracks: ArtistAlbumTrack[];
  readonly currentPlayedTrackId: string;
}

type Props = OwnProps;

const TopTracksSection = styled.section`
  flex-direction: column;
  display: flex;
`;

const TopTracksList = styled.ul`
  padding-left: 0;
  list-style: none;
`;

const TopTrackName = styled.span``;

const TopTrackListItem = styled.li<{ currentPlayedTrackId: boolean }>`
  transition: background-color 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);

  align-items: center;
  display: flex;
  border-bottom: 1px solid #f6e6fd;
  padding: 0.6rem 1rem;

  &:first-of-type {
    border-top: 1px solid #f6e6fd;
  }

  &:hover {
    background: #f6e6fd;
  }

  ${TopTrackName} {
    color: ${({ currentPlayedTrackId, theme }) => (currentPlayedTrackId ? theme.colors.greenDark : 'initial')};
  }
`;

const TopTrackNumber = styled.span`
  display: inline-block;
  min-width: 1rem;
  margin-right: 1rem;
`;

const TopTrackAddToFavouriteButton = styled.button`
  margin-right: 1rem;
  border: none;
  background: none;
`;

const TopTrackDuration = styled.span`
  margin-left: auto;
`;

const ArtistPageTracks: FunctionComponent<Props> = ({ tracks, currentPlayedTrackId }: Props) => {
  return (
    <TopTracksSection>
      <header>
        <h3>Popular</h3>
        <TopTracksList>
          {tracks &&
            tracks.map(({ id, name, duration_ms }, index) => (
              <TopTrackListItem key={id} currentPlayedTrackId={id === currentPlayedTrackId}>
                <TopTrackNumber>{index + 1}</TopTrackNumber>
                <TopTrackAddToFavouriteButton>
                  <span className="material-icons">favorite_border</span>
                </TopTrackAddToFavouriteButton>
                <TopTrackName>{name}</TopTrackName>
                <TopTrackDuration>{msToMinutesAndSeconds(duration_ms)}</TopTrackDuration>
              </TopTrackListItem>
            ))}
        </TopTracksList>
      </header>
    </TopTracksSection>
  );
};

export default ArtistPageTracks;
