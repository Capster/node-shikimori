import { DateTime } from "./common";
import { AnimeBasic } from "./Anime";

export interface Episode {
  next_episode: number,
  next_episode_at: DateTime,
  duration: number | null,
  anime: AnimeBasic,
}
