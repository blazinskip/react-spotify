import React from 'react';
import styled from 'styled-components';

export interface LastPlayedPlaylist {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

const lastPlayedPlaylists: LastPlayedPlaylist[] = [
  {
    id: 1,
    imageUrl: 'https://pl.scdn.co/images/pl/default/d7fcb5f7d5f423fc364706ebb5e6c007c389f843',
    title: 'Music for work',
    description: 'Muzyka idealna w oczekiwaniu na...',
  },
  {
    id: 2,
    imageUrl: 'https://i.scdn.co/image/ab67706f000000024de77acbe943df267598e50c',
    title: 'Music for a Workday',
    description: 'A playlist to get you through your whole...',
  },
  {
    id: 3,
    imageUrl: 'https://i.scdn.co/image/ab67706c0000da8473514a8699ac81d869805cf1',
    title: 'The Witcher (Netflix)',
    description: 'Best songs and music from the new Netflix',
  },
];

const CardList = styled.section`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(164px, 1fr));
  grid-auto-rows: 0;
  grid-template-rows: auto 1fr;
`;

const CardListBottom = styled.div`
  display: flex;
  width: 100%;
  grid-column: 1/-1;
`;

const Card = styled.section`
  flex-direction: column;
  display: flex;
  padding: 20px;
  height: 100%;
  border-radius: 8px;
  background: #e6ddf3;
`;

const CardImageWrapper = styled.div`
  height: 0;
  width: 100%;
  padding-top: 100%;
  position: relative;
  margin-bottom: 16px;
  background-color: #333;
  -webkit-box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`;

const CardImage = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center center;
`;

const CardBottom = styled.div`
  min-height: 62px;
`;

const CardHeaderLink = styled.a`
  text-decoration: none;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  letter-spacing: 0.24px;
  color: #0c7b33;
`;

const CardHeader = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  word-break: break-all;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardDescriptionWrapper = styled.div`
  font-size: 12px;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #6a226f;
  padding: 0;
  margin-top: 4px;
  white-space: normal;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const HomeView = () => {
  const mapLastPlayedPlaylistToCard = ({ id, title, description, imageUrl }: LastPlayedPlaylist) => (
    <Card key={id}>
      <CardImageWrapper>
        <CardImage src={imageUrl} />
      </CardImageWrapper>

      <CardBottom>
        <CardHeaderLink href="">
          <CardHeader>{title}</CardHeader>
        </CardHeaderLink>
        <CardDescriptionWrapper>
          <span>{description}</span>
        </CardDescriptionWrapper>
      </CardBottom>
    </Card>
  );

  return (
    <>
      <CardList>
        <CardListBottom>
          <h2>Last Played</h2>
        </CardListBottom>

        {lastPlayedPlaylists.map(mapLastPlayedPlaylistToCard)}
      </CardList>
    </>
  );
};

export default HomeView;
