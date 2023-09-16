export * from './abuse-request';
export * from './achievement';
export * from './anime';
export * from './ban';
export * from './character';
export * from './club';
export * from './comment';
export * from './constants';
export * from './content';
export * from './dialog';
export * from './episode-notification';
export * from './episode';
export * from './forum';
export * from './genre';
export * from './ignore-notice';
export * from './image';
export * from './manga';
export * from './message';
export * from './person';
export * from './publisher';
export * from './ranobe';
export * from './review';
export * from './studio';
export * from './style';
export * from './topic';
export * from './user-image';
export * from './user-rate';
export * from './user';
export * from './video';

export type Notice = Record<'notice', string>;
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
