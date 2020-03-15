import { useEffect, useState } from 'react';
import { Playlist } from '../models';
import axios from 'axios';

export function usePlaylistById(id: string | undefined) {
  const [playlist, setPlaylist] = useState<null | Playlist>(null);
  useEffect(() => {
    const getPlaylistById = async () => {
      const token = localStorage.getItem('token');
      const tokenType = localStorage.getItem('tokenType');
      if (token && tokenType) {
        const { data } = await axios(`https://api.spotify.com/v1/playlists/${id}`, {
          headers: {
            Authorization: `${tokenType} ${token}`,
          },
        });

        setPlaylist(() => ({ ...data } as Playlist));
      } else {
        setPlaylist(() => null);
      }
    };
    getPlaylistById();
  }, [id]);

  return { playlist };
}
