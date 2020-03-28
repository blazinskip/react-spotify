import { useEffect, useState } from 'react';
import axios from 'axios';
import { Artist, ArtistAlbum, ArtistTopTrack, Page } from '../models';

const getArtistById = async (id?: string) => {
  const token = localStorage.getItem('token');
  const tokenType = localStorage.getItem('tokenType');

  const getArtist = axios.get<Artist>(`https://api.spotify.com/v1/artists/${id}`, {
    headers: {
      Authorization: `${tokenType} ${token}`,
    },
  });

  const getArtistTopTracks = axios.get<{ tracks: ArtistTopTrack[] }>(
    `https://api.spotify.com/v1/artists/${id}/top-tracks?country=PL`,
    {
      headers: {
        Authorization: `${tokenType} ${token}`,
      },
    },
  );

  const getArtistAlbums = axios.get<Page<ArtistAlbum>>(`https://api.spotify.com/v1/artists/${id}/albums?country=PL`, {
    headers: {
      Authorization: `${tokenType} ${token}`,
    },
  });

  return Promise.all([getArtist, getArtistTopTracks, getArtistAlbums]);
};

export function useArtist(id?: string) {
  const [artist, setArtist] = useState<Artist>({} as Artist);
  useEffect(() => {
    const resolveArtist = async () => {
      const axiosResponses = await getArtistById(id);
      const [artist, tracks, albums] = axiosResponses.map(axiosResponse => axiosResponse.data) as [
        Artist,
        { tracks: ArtistTopTrack[] },
        Page<ArtistAlbum>,
      ];

      const createdArtist = { ...artist, topTracks: tracks.tracks, albums };
      setArtist(() => ({ ...createdArtist }));
    };

    resolveArtist();
  }, [id]);

  return { artist };
}
