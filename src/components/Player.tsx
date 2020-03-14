import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';

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
  const [player, setPlayer] = useState<null | Spotify.SpotifyPlayer>(null);
  const [deviceId, setDeviceId] = useState<string>('');

  const addPlayer = () => {
    console.log('addPlayer');
    window.onSpotifyWebPlaybackSDKReady = () => {
      console.log('onSpotifyWebPlaybackSDKReady');

      const player = new window.Spotify.Player({
        name: 'Web Playback SDK Template',
        getOAuthToken: cb => {
          cb(localStorage.getItem('token') || '');
        },
      });

      function play(deviceId: string) {
        fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
          method: 'PUT',
          // eslint-disable-next-line @typescript-eslint/camelcase
          body: JSON.stringify({ context_uri: 'spotify:playlist:2Hs1llVpLnMR3QEETRxDVb' }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
      }

      player.on('ready', data => {
        console.log('Ready with Device ID', data.device_id);
        setDeviceId(() => data.device_id);

        // Play a track using our new device ID
        play(data.device_id);
      });
      player.connect();
      setPlayer(() => player);
    };
  };

  const addScript = () => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    document.body.appendChild(script);
  };

  useEffect(() => {
    addPlayer();
    addScript();
  }, []);

  return (
    <PlayerWrapper>
      <LeftSection>
        <CurrentSongImageWrapper>
          <img src="https://pl.scdn.co/images/pl/default/d7fcb5f7d5f423fc364706ebb5e6c007c389f843" alt="" />
        </CurrentSongImageWrapper>

        <CurrentSongInfoWrapper>
          <h3>Secret Void</h3>
          <small>BOKKA</small>
        </CurrentSongInfoWrapper>
      </LeftSection>
      <CenterSection>
        <PlayerActionButtonsWrapper>
          <button>
            <i className="material-icons">replay_5</i>
          </button>
          <button onClick={() => player?.previousTrack()}>
            <i className="material-icons">skip_previous</i>
          </button>
          <button onClick={() => player?.togglePlay()}>
            <i className="material-icons">play_circle_outline</i>
          </button>
          <button onClick={() => player?.nextTrack()}>
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
