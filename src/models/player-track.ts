export interface PlayerTrack extends Spotify.Track {
  linked_from: {
    id: string;
    uri: string;
  };
}
