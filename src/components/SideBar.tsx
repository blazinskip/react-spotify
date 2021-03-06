import styled from 'styled-components';
import React, { ReactElement, useContext } from 'react';
import SpotifyClientContext from '../context/SpotifyClientContext';
import { Playlist } from '../models';
import { Link } from 'react-router-dom';

const SideBarSection = styled.section`
  padding: 0 1.5rem;
  grid-area: sidebar;
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

const MainNavigationLink = styled(Link)`
  align-items: center;
  flex-grow: 1;
  display: flex;
  padding: 0.3rem 0;

  color: initial;
  text-decoration: none;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }

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

const NavigationSectionListItemLink = styled(Link)`
  flex-basis: 100%;
  padding: ${props => props.theme.spacing[props.theme.links.padding]} 0;
  color: ${props => props.theme.colors[props.theme.links.color]};
  text-decoration: none;

  transition: color 0.3s;

  &:hover {
    color: ${props => props.theme.colors[props.theme.links.hoverColor]};
  }
`;

const SideBar = () => {
  const { playlists } = useContext(SpotifyClientContext);

  const mapPlaylistToPlaylistLink = ({ id, name }: Playlist): ReactElement => (
    <NavigationSectionListItem key={id}>
      <NavigationSectionListItemLink to={`/playlist/${id}`}>{name}</NavigationSectionListItemLink>
    </NavigationSectionListItem>
  );

  return (
    <SideBarSection>
      <MainNavigationList>
        <MainNavigationListItem>
          <MainNavigationLink to={'/'}>
            <i className="material-icons">home</i> <span>Home Page</span>
          </MainNavigationLink>
        </MainNavigationListItem>
        <MainNavigationListItem>
          <MainNavigationLink to={'/'}>
            <i className="material-icons">radio</i> <span>Radio</span>
          </MainNavigationLink>
        </MainNavigationListItem>
      </MainNavigationList>

      <NavigationSection>
        <NavigationSectionHeader>YOUR LIBRARY</NavigationSectionHeader>

        <NavigationSectionList>
          <NavigationSectionListItem>
            <NavigationSectionListItemLink to={`/made-for-you`}>Made For You</NavigationSectionListItemLink>
          </NavigationSectionListItem>
          <NavigationSectionListItem>
            <NavigationSectionListItemLink to={`/recently-played`}>Recently Played</NavigationSectionListItemLink>
          </NavigationSectionListItem>
          <NavigationSectionListItem>
            <NavigationSectionListItemLink to={`/liked-songs`}>Liked Songs</NavigationSectionListItemLink>
          </NavigationSectionListItem>
          <NavigationSectionListItem>
            <NavigationSectionListItemLink to={`/favourite-albums`}>Albums</NavigationSectionListItemLink>
          </NavigationSectionListItem>
          <NavigationSectionListItem>
            <NavigationSectionListItemLink to={`/favourite-artists`}>Artists</NavigationSectionListItemLink>
          </NavigationSectionListItem>
          <NavigationSectionListItem>
            <NavigationSectionListItemLink to={`/favourite-podcasts`}>Podcasts</NavigationSectionListItemLink>
          </NavigationSectionListItem>
        </NavigationSectionList>
      </NavigationSection>

      <NavigationSection>
        <NavigationSectionHeader>PLAYLISTS</NavigationSectionHeader>

        <NavigationSectionList>{playlists.length && playlists.map(mapPlaylistToPlaylistLink)}</NavigationSectionList>
      </NavigationSection>
    </SideBarSection>
  );
};

export default SideBar;
