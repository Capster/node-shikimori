import { DateTime } from ".";
import { Content } from "./content";
import { Genre } from "./genre";
import { ImageSet } from "./image";
import { Studio } from "./studio";
import { Video } from "./video";

export type AnimeId = number;
export type AnimeStatus = 'anons' | 'ongoing' | 'released';
export type AnimeRating = 'none' | 'g' | 'pg' | 'pg_13' | 'r' | 'r_plus' | 'rx';
export type AnimeKind = 'tv'
  | 'movie'
  | 'ova'
  | 'ona'
  | 'special'
  | 'music'
  | 'tv_13'
  | 'tv_24'
  | 'tv_48';

export interface Anime extends Content {
  id: AnimeId,
  kind: AnimeKind,
  status: AnimeStatus,
  episodes: number,
  episodes_aired: number,
  rating: AnimeRating,
  genres: Genre<'Anime'>[],
  duration: number,
  updated_at: DateTime,
  next_episode_at: number | null;
  fansubbers: string[],
  fandubbers: string[],
  studios: Studio[],
  videos: Video[],
  screenshots: ImageSet[],
}

export type AnimeBasic = Pick<Anime, 'id'
  | 'name'
  | 'russian'
  | 'image'
  | 'url'
  | 'kind'
  | 'score'
  | 'status'
  | 'episodes'
  | 'episodes_aired'
  | 'aired_on'
  | 'released_on'
>;
