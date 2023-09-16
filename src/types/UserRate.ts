import { DateTime } from ".";
import { AnimeId } from "./anime";
import { MangaId } from "./manga";
import { RanobeId } from "./ranobe";
import { UserId } from "./user";

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

export type UserRateBasic = Omit<UserRate, 'user_id' | 'target_id' | 'target_type'>;
