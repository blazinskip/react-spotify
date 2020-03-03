import React, { useContext } from 'react';
import SpotifyClientContext from '../context/SpotifyClientContext';
import styled from 'styled-components';

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-template-rows: 1fr 0.1fr;
  grid-template-areas: 'sidebar home home' 'player player player';
  height: 100vh;
`;

const SideBar = styled.section`
  padding: 0 1.5rem;
  grid-area: sidebar;
`;

const Home = styled.section`
  grid-area: home;
`;

const Player = styled.section`
  grid-area: player;
`;

const MainNavigationList = styled.ul`
  margin-top: 60px;
  padding-left: 0;
  list-style: none;
`;

const MainNavigationListItem = styled.li`
  align-items: center;
  display: flex;
`;

const MainNavigationLink = styled.a`
  align-items: center;
  flex-grow: 1;
  display: flex;
  padding: 0.3rem 0;

  span {
    padding-left: 0.5rem;
    font-size: 20px;
  }
`;

const AuthorizedUserApp = () => {
  const { user } = useContext(SpotifyClientContext);
  return (
    <Wrapper>
      <SideBar>
        <MainNavigationList>
          <MainNavigationListItem>
            <MainNavigationLink>
              <i className="material-icons">home</i> <span>Home Page</span>
            </MainNavigationLink>
          </MainNavigationListItem>
          <MainNavigationListItem>
            <MainNavigationLink>
              <i className="material-icons">radio</i> <span>Radio</span>
            </MainNavigationLink>
          </MainNavigationListItem>
        </MainNavigationList>

      </SideBar>

      <Home>
        Home
        <h3>Hello {user?.display_name}</h3>
      </Home>

      <Player>player</Player>
    </Wrapper>
  );
};

export default AuthorizedUserApp;
