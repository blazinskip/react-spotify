import styled from 'styled-components';
import { BasePrimaryButton } from '../styles';
import { msToMinutesAndSeconds } from '../utils';
import React, { FunctionComponent } from 'react';
import { Playlist } from '../models';
import { PausePlayerFunction, PlayUriFunction } from '../context';
import { Link } from 'react-router-dom';

const PlaylistPageWrapper = styled.div`
  display: flex;
  height: 100%;
  padding-top: 36px;
  text-align: center;
`;

const PlaylistInfo = styled.section`
  align-items: center;
  flex-direction: column;
  flex-basis: 35%;
  display: flex;
  padding: 1rem;
`;

const PlaylistName = styled.h2`
  margin-bottom: 0;
`;

const PlaylistAuthor = styled.span`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

const PlaylistTracks = styled.section`
  flex-basis: 75%;
  overflow-y: scroll;
  max-height: calc(100vh - 196px);
  padding: 1rem;
`;

const PlaylistTractInfoWrapper = styled.div`
  align-items: start;
  flex-direction: column;
  display: flex;
  margin-left: 0.5rem;
`;

const TrackDuration = styled.span`
  margin-left: auto;
`;

const PlayTrackButton = styled.button`
  background: transparent;
  border: 1px solid transparent;
`;

const TrackName = styled.span``;

const PlaylistTrack = styled.div<{ currentTrack?: boolean }>`
  display: flex;
  padding: 0.5rem;
  transition: background-color 0.2s ease-in-out;

  ${TrackName} {
    transition: color 0.3s ease-in-out;
    color: ${props => (props.currentTrack ? props.theme.colors.greenDark : 'initial')};
  }

  ${PlayTrackButton} {
    transition: color 0.3s ease-in-out;
    color: ${props => (props.currentTrack ? props.theme.colors.greenDark : 'initial')};
  }

  &:hover {
    background: #f6e6fd;
  }
`;

const PlaylistTrackArtists = styled.div``;
const PlaylistTrackArtist = styled(Link)`
  text-decoration: none;
  color: initial;
`;

interface PlaylistProps {
  playlist: Playlist;
  currentTrackId: string;
  playUri: PlayUriFunction;
  pausePlayer: PausePlayerFunction;
}

type Props = PlaylistProps;

const PlaylistPage: FunctionComponent<Props> = ({ playlist, currentTrackId, playUri, pausePlayer }: Props) => {
  // todo extend type
  const artistToArtistLink = (artist: { id: string; name: string }) => (
    <PlaylistTrackArtist key={artist.id} to={`/artist/${artist.id}`}>
      {artist.name}&nbsp;
    </PlaylistTrackArtist>
  );

  return (
    <PlaylistPageWrapper>
      <PlaylistInfo>
        <img src={playlist?.images[0]?.url ?? ''} alt={'Album'} />
        <PlaylistName>{playlist?.name}</PlaylistName>
        <PlaylistAuthor>{playlist?.owner.display_name}</PlaylistAuthor>
        <BasePrimaryButton onClick={() => playUri({ uri: playlist.uri })}>PLAY</BasePrimaryButton>
        <p>{playlist?.description}</p>

        <span>{playlist?.tracks.items.length} Tracks</span>
      </PlaylistInfo>
      <PlaylistTracks>
        {playlist?.tracks.items.map((item, index) => {
          if (item.track.id === currentTrackId) {
            return (
              <PlaylistTrack
                key={item.track.id}
                currentTrack
                onDoubleClick={() => playUri({ uri: playlist.uri, offset: index })}
              >
                <PlayTrackButton onClick={() => pausePlayer}>
                  <i className="material-icons">pause</i>
                </PlayTrackButton>

                <PlaylistTractInfoWrapper>
                  <TrackName>{item?.track?.name ?? ''}</TrackName>
                  <PlaylistTrackArtists>{item.track.artists.map(artistToArtistLink)}</PlaylistTrackArtists>
                </PlaylistTractInfoWrapper>

                <TrackDuration>{msToMinutesAndSeconds(item?.track?.duration_ms)}</TrackDuration>
              </PlaylistTrack>
            );
          } else {
            return (
              <PlaylistTrack key={item.track.id} onDoubleClick={() => playUri({ uri: playlist.uri, offset: index })}>
                <PlayTrackButton onClick={() => playUri({ uri: playlist.uri, offset: index })}>
                  <i className="material-icons">play_arrow</i>
                </PlayTrackButton>

                <PlaylistTractInfoWrapper>
                  <TrackName>{item?.track?.name ?? ''}</TrackName>
                  <PlaylistTrackArtists>{item.track.artists.map(artistToArtistLink)}</PlaylistTrackArtists>
                </PlaylistTractInfoWrapper>

                <TrackDuration>{msToMinutesAndSeconds(item?.track?.duration_ms)}</TrackDuration>
              </PlaylistTrack>
            );
          }
        })}
      </PlaylistTracks>
    </PlaylistPageWrapper>
  );
};

export default PlaylistPage;
