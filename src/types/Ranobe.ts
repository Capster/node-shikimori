import { Content } from "./Content";
import { Genre } from "./Genre";
import { Publisher } from "./Publisher";

export type RanobeId = number;
export type RanobeStatus = 'anons' | 'ongoing' | 'released' | 'paused' | 'discontinued';
export type RanobeKind = 'light_novel' | 'novel';

export interface Ranobe extends Content {
  id: RanobeId,
  kind: RanobeKind,
  status: RanobeStatus,
  genres: Genre<'Manga'>[],
  volumes: number,
  chapters: number,
  publishers: Publisher[],
}

export type RanobeBasic = Pick<Ranobe, 'id' | 'name' | 'russian' | 'image' | 'url' | 'kind' | 'score' | 'status' | 'volumes' | 'chapters' | 'aired_on' | 'released_on'>;
