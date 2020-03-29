import { useEffect, useState } from 'react';
import axios from 'axios';
import { Artist, ArtistAlbum, ArtistAlbumTrack, Page } from '../models';

const getArtistById = async (id?: string) => {
  const token = localStorage.getItem('token');
  const tokenType = localStorage.getItem('tokenType');

  const getArtist = axios.get<Artist>(`https://api.spotify.com/v1/artists/${id}`, {
    headers: {
      Authorization: `${tokenType} ${token}`,
    },
  });

  const getArtistTopTracks = axios.get<{ tracks: ArtistAlbumTrack[] }>(
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

const getTracksForAlbums = (artistAlbums: ArtistAlbum[]) => {
  const token = localStorage.getItem('token');
  const tokenType = localStorage.getItem('tokenType');

  const tracksForAlbum = (album: ArtistAlbum) =>
    axios.get<Page<ArtistAlbumTrack>>(`https://api.spotify.com/v1/albums/${album.id}/tracks?country=PL`, {
      headers: {
        Authorization: `${tokenType} ${token}`,
      },
    });

  const tracksPerAlbum = artistAlbums.map(album => tracksForAlbum(album));

  return Promise.all(tracksPerAlbum);
};

export function useArtist(id?: string) {
  const [artist, setArtist] = useState<Artist>({} as Artist);
  useEffect(() => {
    const resolveArtist = async () => {
      const axiosResponses = await getArtistById(id);
      const [artist, tracks, albums] = axiosResponses.map(axiosResponse => axiosResponse.data) as [
        Artist,
        { tracks: ArtistAlbumTrack[] },
        Page<ArtistAlbum>,
      ];

      const tracksForAlbumsAxiosResponses = await getTracksForAlbums(albums.items);
      const tracksForAlbums = tracksForAlbumsAxiosResponses.map(value => value.data);

      const albumsWithTracks = {
        ...albums,
        items: albums.items.map((album, index) => ({ ...album, tracks: tracksForAlbums[index] ?? [] })),
      } as Page<ArtistAlbum>;

      const createdArtist = { ...artist, topTracks: tracks.tracks, albums: albumsWithTracks };

      setArtist(() => ({ ...createdArtist }));
    };

    resolveArtist();
  }, [id]);

  return { artist };
}
