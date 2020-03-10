import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
`;

const NavigationButtonsWrapper = styled.div`
  display: flex;

  button {
    height: 38px;
    width: 38px;
    justify-content: center;
    align-items: center;
    display: flex;
    background: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    .material-icons {
      font-size: 2rem;
    }

    &:hover {
      background: #f6e6fd;
    }
  }
`;

const TopBarSection = () => {
  return (
    <>
      <Header>
        <NavigationButtonsWrapper>
          <button>
            <i className="material-icons">chevron_left</i>
          </button>
          <button>
            <i className="material-icons">chevron_right</i>
          </button>
        </NavigationButtonsWrapper>
      </Header>
    </>
  );
};

export default TopBarSection;
