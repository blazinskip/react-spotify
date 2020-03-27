import axios from 'axios';

class PlayerApi {
  playUri(options: { uri: string; deviceId: string; offset?: number }) {
    const { uri, deviceId, offset = 0 } = options;

    let data = {};

    if (uri.includes('artist')) {
      data = {
        ...data,
        context_uri: uri,
      };
    } else {
      data = {
        ...data,
        offset: { position: offset },
        context_uri: uri,
      };
    }

    // TODO remove deviceId it is not required
    axios.put(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }
}

const playerApi = new PlayerApi();

export default playerApi;
