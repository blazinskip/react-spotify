import { useEffect, useState } from 'react';
import axios from 'axios';
import { Playlist } from '../models';

export function usePlaylists(): [Playlist[]] {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    const getUserPlaylists = async () => {
      const token = localStorage.getItem('token');
      const tokenType = localStorage.getItem('tokenType');
      if (token && tokenType) {
        const { data } = await axios(' https://api.spotify.com/v1/me/playlists', {
          headers: {
            Authorization: `${tokenType} ${token}`,
          },
        });
        for (const itemsKey of data.items) {
          axios(`https://api.spotify.com/v1/playlists/${(itemsKey as Playlist).id}`, {
            headers: {
              Authorization: `${tokenType} ${token}`,
            },
          });
        }

        setPlaylists(() => [...data.items]);
      } else {
        setPlaylists(() => []);
      }
    };
    getUserPlaylists();
  }, []);

  return [playlists];
}
