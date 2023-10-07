import { DateTime } from "./common";

export interface EpisodeNotification {
  id: number,
  anime_id: number,
  episode: number,
  is_raw: boolean,
  is_subtitles: boolean,
  is_fandub: boolean,
  is_anime365: boolean,
  topic_id: number,
}

export interface EpisodeNotificationTemplate {
  anime_id: number,
  episode: number,
  aired_at: DateTime,
  is_raw?: boolean,
  is_subtitles?: boolean,
  is_fandub?: boolean,
  is_anime365?: boolean,
}
