import { Album } from '../models';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function useRecentlyPlayed(): { albums: Album[] } {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const getRecentlyPlayedAlbums = async () => {
      const token = localStorage.getItem('token');
      const tokenType = localStorage.getItem('tokenType');
      if (token && tokenType) {
        const { data } = await axios(`https://api.spotify.com/v1/me/player/recently-played?limit=50`, {
          headers: {
            Authorization: `${tokenType} ${token}`,
          },
        });

        const recentlyPlayedAlbums = Array.from(
          new Set<string>(
            data.items
              .map((item: any) => item.track.album)
              .filter((album: any) => album.album_type === 'album')
              .map((album: any) => JSON.stringify(album)),
          ),
        ).map((value: string) => JSON.parse(value));

        setAlbums(() => [...recentlyPlayedAlbums.slice(0, Math.min(6, recentlyPlayedAlbums.length))]);
      } else {
        setAlbums(() => []);
      }
    };
    getRecentlyPlayedAlbums();
  }, []);

  return { albums };
}
