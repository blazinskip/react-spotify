import axios from 'axios';

class PlayerApi {
  playPlaylist(playlistUri: string, deviceId: string, offset = 0) {
    // TODO remove deviceId it is not required
    axios.put(
      `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
      {
        offset: { position: offset },
        // eslint-disable-next-line @typescript-eslint/camelcase
        context_uri: playlistUri,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    );
  }
}

const playerApi = new PlayerApi();

export default playerApi;
