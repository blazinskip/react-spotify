import React, { FunctionComponent, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePlaylistById } from '../hooks';
import styled from 'styled-components';
import playerApi from '../api/player.api';
import SpotifyClientContext from '../context/SpotifyClientContext';
import { msToMinutesAndSeconds } from '../utils';
import { BasePrimaryButton } from '../styles';
import { PlayerTrack } from '../models';
import BaseLoading from '../components/BaseLoading';

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

const PlaylistPage: FunctionComponent = () => {
  const { id } = useParams();
  const [currentTrackId, setCurrentTrackId] = useState('');
  const { playlist } = usePlaylistById(id);
  const { deviceId, player } = useContext(SpotifyClientContext);

  player?.on('player_state_changed', ({ track_window: { current_track } }: Spotify.PlaybackState) => {
    const {
      id,
      linked_from: { id: linkedFromId },
    } = current_track as PlayerTrack;

    setCurrentTrackId(() => linkedFromId ?? id);
  });

  if (playlist) {
    return (
      <PlaylistPageWrapper>
        <PlaylistInfo>
          <img src={playlist?.images[0]?.url ?? ''} alt={'Album image'} />
          <PlaylistName>{playlist?.name}</PlaylistName>
          <PlaylistAuthor>{playlist?.owner.display_name}</PlaylistAuthor>
          <BasePrimaryButton onClick={() => playerApi.playPlaylist(playlist?.uri, deviceId)}>PLAY</BasePrimaryButton>
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
                  onDoubleClick={() => playerApi.playPlaylist(playlist?.uri, deviceId, index)}
                >
                  <PlayTrackButton onClick={() => player?.pause()}>
                    <i className="material-icons">pause</i>
                  </PlayTrackButton>

                  <PlaylistTractInfoWrapper>
                    <TrackName>{item?.track?.name ?? ''}</TrackName>
                    <span>{item.track.artists.map(artist => artist.name).join(' - ')}</span>
                  </PlaylistTractInfoWrapper>

                  <TrackDuration>{msToMinutesAndSeconds(item?.track?.duration_ms)}</TrackDuration>
                </PlaylistTrack>
              );
            } else {
              return (
                <PlaylistTrack
                  key={item.track.id}
                  onDoubleClick={() => playerApi.playPlaylist(playlist?.uri, deviceId, index)}
                >
                  <PlayTrackButton onClick={() => playerApi.playPlaylist(playlist?.uri, deviceId, index)}>
                    <i className="material-icons">play_arrow</i>
                  </PlayTrackButton>

                  <PlaylistTractInfoWrapper>
                    <TrackName>{item?.track?.name ?? ''}</TrackName>
                    <span> {item.track.artists.map(artist => artist.name).join(' - ')}</span>
                  </PlaylistTractInfoWrapper>

                  <TrackDuration>{msToMinutesAndSeconds(item?.track?.duration_ms)}</TrackDuration>
                </PlaylistTrack>
              );
            }
          })}
        </PlaylistTracks>
      </PlaylistPageWrapper>
    );
  } else {
    return <BaseLoading />;
  }
};

export default PlaylistPage;
