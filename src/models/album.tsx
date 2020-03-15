export interface Album {
  id: string;
  uri: string;
  name: string;
  images: [{ height: number; width: number; url: string }];
}
