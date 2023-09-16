import { Content } from "./content";
import { Genre } from "./genre";
import { Publisher } from "./publisher";

export type MangaId = number;
export type MangaStatus = 'anons' | 'ongoing' | 'released' | 'paused' | 'discontinued';
export type MangaKind = 'manga' | 'manhwa' | 'manhua' | 'one_shot' | 'doujin';

export interface Manga extends Content {
  id: MangaId,
  kind: MangaKind,
  status: MangaStatus,
  genres: Genre<'Manga'>[],
  volumes: number,
  chapters: number,
  publishers: Publisher[],
}

export type MangaBasic = Pick<Manga, 'id' | 'name' | 'russian' | 'image' | 'url' | 'kind' | 'score' | 'status' | 'volumes' | 'chapters' | 'aired_on' | 'released_on'>;
