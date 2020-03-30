import React from 'react';
import styled from 'styled-components';
import SideBar from '../components/SideBar';
import HomeView from '../components/HomeView';
import TopBarSection from '../components/TobBarSection';
import Player from '../components/Player';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PlaylistView from '../views/PlaylistView';
import ContextProvider from '../context/ContextProvider';
import { useSpotifyPlayer } from '../hooks';
import ArtistPage from '../views/ArtistPage';
import MadeForYouPage from '../views/MadeForYouPage';

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-template-rows: 1fr 90px;
  grid-template-areas: 'sidebar home home' 'player player player';
  height: 100vh;
`;

const MainSection = styled.section`
  grid-area: home;
  padding: 0 24px;

  & > div:first-child {
    position: sticky;
    height: 70px;
  }
`;

const PlayerWrapper = styled.section`
  grid-area: player;
  z-index: 10;
`;

const TopBar = styled.div`
  grid-area: home;
  z-index: 2;
  padding: 16px 24px;
  height: 70px;
`;

const AuthorizedUserApp = () => {
  const { player, deviceId } = useSpotifyPlayer();

  if (player && deviceId) {
    return (
      <ContextProvider player={player} deviceId={deviceId}>
        <BrowserRouter>
          <Wrapper>
            <SideBar />
            <TopBar>
              <TopBarSection />
            </TopBar>
            <MainSection>
              <div />

              <Switch>
                <Route exact path={'/made-for-you'} component={MadeForYouPage} />
                <Route exact path={'/playlist/:id'} component={PlaylistView} />
                <Route exact path={'/artist/:id'} component={ArtistPage} />
                <Route exact path="/">
                  <HomeView />
                </Route>
              </Switch>
            </MainSection>

            <PlayerWrapper>
              <Player />
            </PlayerWrapper>
          </Wrapper>
        </BrowserRouter>
      </ContextProvider>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default AuthorizedUserApp;
