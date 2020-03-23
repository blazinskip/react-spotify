import { useEffect, useState } from 'react';
import axios from 'axios';
import { Artist } from '../models';

const getArtistById = async (id?: string) => {
  const token = localStorage.getItem('token');
  const tokenType = localStorage.getItem('tokenType');

  const getArtist = axios.get<Artist>(`https://api.spotify.com/v1/artists/${id}`, {
    headers: {
      Authorization: `${tokenType} ${token}`,
    },
  });
  const getArtistTopTracks = axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=PL`, {
    headers: {
      Authorization: `${tokenType} ${token}`,
    },
  });
  const getArtistAlbums = axios.get(`https://api.spotify.com/v1/artists/${id}/albums`, {
    headers: {
      Authorization: `${tokenType} ${token}`,
    },
  });

  return axios.all([getArtist, getArtistTopTracks, getArtistAlbums]);
};

export function useArtist(id?: string) {
  const [artist, setArtist] = useState<Artist>({} as Artist);
  useEffect(() => {
    const resolveArtist = async () => {
      const result = await getArtistById(id);
      const [artist, tracks, albums] = result.map(axiosResponse => axiosResponse.data);

      setArtist(() => ({ ...artist, tracks: tracks.tracks, albums }));
    };

    resolveArtist();
  }, [id]);

  return { artist };
}
