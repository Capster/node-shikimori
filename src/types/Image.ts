export interface ImageSet {
  [x: string]: string | undefined;
}

export type ImageId = number;

export interface Image {
  id: ImageId,
  original_url: string,
  main_url: string,
  preview_url: string,
  can_destroy: boolean,
  user_id: number,
}

export type Screenshot = Record<'original' | 'preview', string>;
