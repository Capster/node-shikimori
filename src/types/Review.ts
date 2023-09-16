import { DateTime, Linkable } from ".";
import { AnimeId } from "./anime";
import { MangaId } from "./manga";
import { UserId } from "./user";

export type ReviewId = number;
export type ReviewOpinion = 'positive' | 'neutral' | 'negative';

export interface Review extends Linkable {
  id: ReviewId,
  user_id: UserId,
  anime_id: AnimeId | null,
  manga_id: MangaId | null,
  body: string,
  opinion: ReviewOpinion,
  is_written_before_release: boolean,
  created_at: DateTime,
  updated_at: DateTime,
  comments_count: number,
  cached_votes_up: number,
  cached_votes_down: number,
  changed_at: DateTime | null,
}
