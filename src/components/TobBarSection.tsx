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

const SearchInput = styled.input`
  font-size: 1rem;
  padding: 0px 1rem;
  border-radius: 300px;
  border: 1px solid transparent;
  background: #f6e6fd;
  outline: none;
  letter-spacing: 0.5px;
  color: #3c3939;

  &:focus {
    box-shadow: 0 0 0 3px #74aaefd6;
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

        <SearchInput placeholder="Search for artists, songs..." type="search" />
      </Header>
    </>
  );
};

export default TopBarSection;
