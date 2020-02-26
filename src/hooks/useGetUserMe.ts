import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../models';

export function useGetUserMe(): [User | null] {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUserProfile = async () => {
      const token = localStorage.getItem('token');
      const tokenType = localStorage.getItem('tokenType');
      if (token && tokenType) {
        const { data } = await axios(' https://api.spotify.com/v1/me', {
          headers: {
            Authorization: `${tokenType} ${token}`,
          },
        });
        setUser(() => data);
      } else {
        setUser(() => null);
      }
    };
    getUserProfile();
  }, []);

  return [user];
}
