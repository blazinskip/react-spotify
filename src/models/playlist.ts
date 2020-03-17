export interface Playlist {
  id: string;
  name: string;
  description: string;
  href: string;
  uri: string;
  images: { url: string }[];
  owner: {
    id: string;
    display_name: string;
  };
  tracks: {
    items: {
      track: {
        id: string;
        uri: string;
        name: string;
        description: string;
        duration_ms: number;
        artists: { id: string; name: string }[];
      };
    }[];
  };
}
