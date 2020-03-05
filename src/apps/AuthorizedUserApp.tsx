import React, { useContext } from 'react';
import SpotifyClientContext from '../context/SpotifyClientContext';
import styled from 'styled-components';
import SideBar from '../components/SideBar';
import HomeView from '../components/HomeView';

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-template-rows: 1fr 0.1fr;
  grid-template-areas: 'sidebar home home' 'player player player';
  height: 100vh;
`;

const MainSection = styled.section`
  grid-area: home;
`;

const Player = styled.section`
  grid-area: player;
`;

const AuthorizedUserApp = () => {
  const { user } = useContext(SpotifyClientContext);
  return (
    <Wrapper>
      <SideBar />
      <MainSection>
        <HomeView />
      </MainSection>

      <Player>player</Player>
    </Wrapper>
  );
};

export default AuthorizedUserApp;
