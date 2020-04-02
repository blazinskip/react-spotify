export interface Album {
  readonly id: string;
  readonly uri: string;
  readonly name: string;
  readonly description: string;
  readonly images: [{ height: number; width: number; url: string }];
}
