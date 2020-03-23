export interface Artist {
  readonly id: string;
  readonly name: string;
  readonly genres: string[];
  readonly popularity: number;
  readonly type: 'artist';
  readonly uri: string;
  readonly images: { readonly url: string; readonly height: number; readonly width: number }[];
  readonly followers: {
    total: number;
  };
  readonly tracks: {
    readonly id: string;
    readonly name: string;
  }[];
}
