import { Content, ContentRelation } from "./Content";
import { Genre } from "./Genre";
import { Publisher } from "./Publisher";
import { Linkable } from "./common";

export type MangaId = number;
export type MangaKind = 'manga' | 'manhwa' | 'manhua' | 'one_shot' | 'doujin';
export type MangaStatus = 'anons' | 'ongoing' | 'released' | 'paused' | 'discontinued';
export type MangaOrder = 'id'
  | 'id_desc'
  | 'ranked'
  | 'kind'
  | 'popularity'
  | 'name'
  | 'aired_on'
  | 'volumes'
  | 'chapters'
  | 'status'
  | 'random'
  | 'created_at'
  | 'created_at_desc';

export interface Manga extends Content {
  id: MangaId,
  kind: MangaKind,
  status: MangaStatus,
  genres: Genre<'Manga'>[],
  volumes: number,
  chapters: number,
  publishers: Publisher[],
}


/** @interface */
export type MangaRelation = ContentRelation & Record<'manga', MangaBasic>;
/** @interface */
export type MangaBasic = Pick<Manga, 'id' | 'name' | 'russian' | 'image' | 'url' | 'kind' | 'score' | 'status' | 'volumes' | 'chapters' | 'aired_on' | 'released_on'> & Linkable;
