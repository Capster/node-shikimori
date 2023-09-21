import { DateTime } from "./common";
import { AnimeBasic, AnimeId } from "./Anime";
import { MangaBasic, MangaId } from "./Manga";
import { RanobeId } from "./Ranobe";
import { UserBasic, UserId } from "./User";

export type UserRateId = number;
export type UserRateType = 'planned' | 'watching' | 'completed' | 'rewatching' | 'on_hold' | 'dropped';

export interface UserRate {
  id: UserRateId,
  user_id: UserId,
  target_id: AnimeId | MangaId | RanobeId,
  target_type: 'Anime' | 'Manga',
  score: number,
  status: string,
  rewatches: number,
  episodes: number,
  volumes: number,
  chapters: number,
  text: string | null,
  text_html: string | null,
  created_at: DateTime,
  updated_at: DateTime,
}

export interface UserRateExtended<T extends AnimeBasic | MangaBasic> extends UserRate {
  user: UserBasic,
  anime: T extends AnimeBasic ? AnimeBasic : null,
  manga: T extends MangaBasic ? MangaBasic : null,
}

export type UserRateBasic = Omit<UserRate, 'user_id' | 'target_id' | 'target_type'>;
