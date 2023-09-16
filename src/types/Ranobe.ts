import { Content } from "./content";
import { Genre } from "./genre";
import { Publisher } from "./publisher";

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
