import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: calc(90px - 1rem);
  grid-gap: 1rem;
  padding: 0.5rem 1rem;
`;

const LeftSection = styled.div``;

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
  return (
    <PlayerWrapper>
      <LeftSection>Left</LeftSection>
      <CenterSection>
        <PlayerActionButtonsWrapper>
          <button>
            <i className="material-icons">replay_5</i>
          </button>
          <button>
            <i className="material-icons">skip_previous</i>
          </button>
          <button>
            <i className="material-icons">play_circle_outline</i>
          </button>
          <button>
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
