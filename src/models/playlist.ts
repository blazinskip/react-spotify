export interface Playlist {
  id: string;
  name: string;
  description: string;
  href: string;
  uri: string;
  images: { url: string }[];
  tracks: {
    items: any[];
  };
}
