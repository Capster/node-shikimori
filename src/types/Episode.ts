import { DateTime } from ".";
import { AnimeBasic } from "./anime";

export interface Episode {
  next_episode: number,
  next_episode_at: DateTime,
  duration: number | null,
  anime: AnimeBasic,
}
