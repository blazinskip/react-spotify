import { Page } from './page';

export type ArtistAlbum = {
  readonly album_group: 'album' | 'single' | 'compilation' | 'appears_on';
  readonly album_type: 'album' | 'single' | 'compilation';
  readonly id: string;
  readonly images: { readonly url: string; readonly height: number; readonly width: number }[];
  readonly name: string;
  readonly type: 'album';
  readonly uri: string;
  readonly release_date: string;
};

export type ArtistTopTrack = {
  readonly duration_ms: number;
  readonly id: string;
  readonly is_playable: boolean;
  readonly name: string;
  readonly type: 'track';
  readonly uri: string;
};

export interface Artist {
  readonly id: string;
  readonly name: string;
  readonly genres: string[];
  readonly type: 'artist';
  readonly uri: string;
  readonly images: { readonly url: string; readonly height: number; readonly width: number }[];
  readonly followers: {
    total: number;
  };
  readonly topTracks: ArtistTopTrack[];
  readonly albums: Page<ArtistAlbum>;
}
