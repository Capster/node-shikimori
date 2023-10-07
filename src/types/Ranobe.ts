import { Content, ContentRelation } from "./Content";
import { Genre } from "./Genre";
import { Publisher } from "./Publisher";
import { Linkable } from "./common";

export type RanobeId = number;
export type RanobeStatus = 'anons' | 'ongoing' | 'released' | 'paused' | 'discontinued';
export type RanobeKind = 'light_novel' | 'novel';
export type RanobeOrder = 'id'
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

export interface Ranobe extends Content {
  id: RanobeId,
  kind: RanobeKind,
  status: RanobeStatus,
  genres: Genre<'Manga'>[],
  volumes: number,
  chapters: number,
  publishers: Publisher[],
}

/** @interface */
export type RanobeRelation = ContentRelation & Record<'manga', RanobeBasic>;
/** @interface */
export type RanobeBasic = Pick<Ranobe, 'id' | 'name' | 'russian' | 'image' | 'url' | 'kind' | 'score' | 'status' | 'volumes' | 'chapters' | 'aired_on' | 'released_on'> & Linkable;
