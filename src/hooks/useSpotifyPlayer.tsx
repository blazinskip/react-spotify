import { useEffect, useState } from 'react';

export function useSpotifyPlayer(): { player: Spotify.SpotifyPlayer | null; deviceId: string } {
  const [player, setPlayer] = useState<null | Spotify.SpotifyPlayer>(null);
  const [deviceId, setDeviceId] = useState<string>('');

  const addPlayer = () => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK Template',
        getOAuthToken: cb => {
          cb(localStorage.getItem('token') || '');
        },
      });

      player.on('ready', data => {
        console.log('Ready with Device ID', data.device_id);
        setDeviceId(() => data.device_id);
        setPlayer(() => player);
      });

      player.connect();
    };
  };

  const addScript = () => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    document.body.appendChild(script);
  };

  useEffect(() => {
    addPlayer();
    addScript();
  }, []);

  return {
    player,
    deviceId,
  };
}
