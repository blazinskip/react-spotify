import React, { useContext } from 'react';
import SpotifyClientContext from '../context/SpotifyClientContext';
import styled from 'styled-components';
import SideBar from '../components/SideBar';

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-template-rows: 1fr 0.1fr;
  grid-template-areas: 'sidebar home home' 'player player player';
  height: 100vh;
`;

const Home = styled.section`
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
      <Home>
        Home
        <h3>Hello {user?.display_name}</h3>
      </Home>

      <Player>player</Player>
    </Wrapper>
  );
};

export default AuthorizedUserApp;
