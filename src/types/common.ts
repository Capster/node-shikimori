/** @interface */
export type Notice = Record<'notice', string>;
/** @interface */
export type NoticeSuccess = Notice & Record<'success', boolean>;

export type DateTime = string;

export interface Linkable {}
export type LinkedId = number;
export type LinkedType = 'Anime'
  | 'Manga'
  | 'Ranobe'
  | 'Character'
  | 'Person'
  | 'Club'
  | 'ClubPage'
  | 'Critique'
  | 'Review'
  | 'Contest'
  | 'CosplayGallery'
  | 'Collection'
  | 'Article'
  | null;
