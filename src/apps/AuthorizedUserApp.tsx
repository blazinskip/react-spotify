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

const NavigationSection = styled.nav`
  margin-top: 10px;
`;

const NavigationSectionHeader = styled.h2`
  font-weight: normal;
  font-size: 1rem;
  letter-spacing: 1.5px;
  margin-bottom: 0;
  margin-top: 3rem;
`;

const NavigationSectionList = styled.ul`
  padding-left: 0;
  list-style: none;
`;

const NavigationSectionListItem = styled.li`
  display: flex;
  padding-left: 0;
`;

const NavigationSectionListItemLink = styled.a`
  flex-basis: 100%;
  padding: ${props => props.theme.spacing[props.theme.links.padding]} 0;
  color: ${props => props.theme.colors[props.theme.links.color]};
  text-decoration: none;

  transition: color 0.3s;

  &:hover {
    color: ${props => props.theme.colors[props.theme.links.hoverColor]};
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

        <NavigationSection>
          <NavigationSectionHeader>YOUR LIBRARY</NavigationSectionHeader>

          <NavigationSectionList>
            <NavigationSectionListItem>
              <NavigationSectionListItemLink href="">Made For You</NavigationSectionListItemLink>
            </NavigationSectionListItem>
            <NavigationSectionListItem>
              <NavigationSectionListItemLink href="">Recently Played</NavigationSectionListItemLink>
            </NavigationSectionListItem>
            <NavigationSectionListItem>
              <NavigationSectionListItemLink href="">Liked Songs</NavigationSectionListItemLink>
            </NavigationSectionListItem>
            <NavigationSectionListItem>
              <NavigationSectionListItemLink href="">Albums</NavigationSectionListItemLink>
            </NavigationSectionListItem>
            <NavigationSectionListItem>
              <NavigationSectionListItemLink href="">Artists</NavigationSectionListItemLink>
            </NavigationSectionListItem>
            <NavigationSectionListItem>
              <NavigationSectionListItemLink href="">Podcasts</NavigationSectionListItemLink>
            </NavigationSectionListItem>
          </NavigationSectionList>
        </NavigationSection>

        <NavigationSection>
          <NavigationSectionHeader>PLAYLISTS</NavigationSectionHeader>

          <NavigationSectionList>
            <NavigationSectionListItem>
              <NavigationSectionListItemLink href="">The Witcher</NavigationSectionListItemLink>
            </NavigationSectionListItem>
            <NavigationSectionListItem>
              <NavigationSectionListItemLink href="">My Acoustic</NavigationSectionListItemLink>
            </NavigationSectionListItem>
          </NavigationSectionList>
        </NavigationSection>
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
