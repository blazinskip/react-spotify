import React, { FunctionComponent } from 'react';
import { ArtistTopTrack } from '../models';
import styled from 'styled-components';

interface OwnProps {
  topTracks: ArtistTopTrack[];
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

const TopTrackListItem = styled.li`
  align-items: center;
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;

  &:first-of-type {
    border-top: 1px solid #f6e6fd;
  }

  border-bottom: 1px solid #f6e6fd;
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

const TopTrackName = styled.span``;

const ArtistPageTopTracks: FunctionComponent<Props> = ({ topTracks }: Props) => {
  return (
    <TopTracksSection>
      <header>
        <h3>Popular</h3>
        <TopTracksList>
          {topTracks &&
            topTracks.map(({ id, name }, index) => (
              <TopTrackListItem key={id}>
                <TopTrackNumber>{index + 1}</TopTrackNumber>
                <TopTrackAddToFavouriteButton>
                  <span className="material-icons">favorite_border</span>
                </TopTrackAddToFavouriteButton>
                <TopTrackName>{name}</TopTrackName>
              </TopTrackListItem>
            ))}
        </TopTracksList>
      </header>
    </TopTracksSection>
  );
};

export default ArtistPageTopTracks;
