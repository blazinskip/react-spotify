import React, { FunctionComponent, useContext } from 'react';
import styled from 'styled-components';
import SpotifyClientContext from '../context/SpotifyClientContext';
import { PlayerTrack } from '../models';

const PlayerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: calc(90px - 1rem);
  grid-gap: 1rem;
  padding: 0.5rem 1rem;
  background: #f6e6fd;
  box-shadow: 0px -1px 3px 0px #c8ced8;
`;

const LeftSection = styled.div`
  display: grid;
  grid-template-columns: 74px auto;
  grid-template-rows: 1fr;
  grid-template-areas: '. .';
  grid-gap: 1rem;
`;

const CurrentSongImageWrapper = styled.div`
  img {
    height: 74px;
    width: auto;
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  }
`;

const CurrentSongInfoWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  display: flex;

  h3 {
    margin: 0;
  }
`;

const CenterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const PlayerActionButtonsWrapper = styled.div`
  display: flex;

  button {
    margin: 0 0.4rem;
    border: none;
    background: none;
    border-radius: 50%;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }

    &:nth-child(3) {
      .material-icons {
        font-size: 2.4rem;
      }
    }
  }
`;

const PlayerAudioProgressWrapper = styled.div``;

const RightSection = styled.div``;

type Props = {};

const Player: FunctionComponent<Props> = () => {
  const {
    playerState: { paused, currentTrack },
    playerFunctions: { playPreviousTrack, resumePlayer, pausePlayer, playNextTrack },
  } = useContext(SpotifyClientContext);

  return (
    <PlayerWrapper>
      <LeftSection>
        <CurrentSongImageWrapper>
          <img srcSet={currentTrack?.album?.images[0]?.url} alt="" />
        </CurrentSongImageWrapper>

        <CurrentSongInfoWrapper>
          <h3>{currentTrack?.name}</h3>
          <small>{currentTrack?.artists.map(artist => artist.name).join(' ')}</small>
        </CurrentSongInfoWrapper>
      </LeftSection>
      <CenterSection>
        <PlayerActionButtonsWrapper>
          <button>
            <i className="material-icons">replay_5</i>
          </button>
          <button onClick={() => playPreviousTrack()}>
            <i className="material-icons">skip_previous</i>
          </button>
          {paused ? (
            <button onClick={() => resumePlayer()}>
              <i className="material-icons">play_arrow</i>
            </button>
          ) : (
            <button onClick={() => pausePlayer()}>
              <i className="material-icons">pause</i>
            </button>
          )}
          <button onClick={() => playNextTrack()}>
            <i className="material-icons">skip_next</i>
          </button>
          <button>
            <i className="material-icons">forward_5</i>
          </button>
        </PlayerActionButtonsWrapper>
        <PlayerAudioProgressWrapper>Progress</PlayerAudioProgressWrapper>
      </CenterSection>
      <RightSection>Right</RightSection>
    </PlayerWrapper>
  );
};

export default Player;
