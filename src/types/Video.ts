export type VideoKind =
  | "pv"
  | "character_trailer"
  | "cm"
  | "op"
  | "ed"
  | "op_clip"
  | "ed_clip"
  | "op_ed_clip"
  | "clip"
  | "other"
  | "episode_preview";

export type VideoHosting =
  | "youtube"
  | "vk"
  | "ok"
  | "coub"
  | "rutube"
  | "vimeo"
  | "sibnet"
  | "yandex"
  | "streamable"
  | "smotret_anime"
  | "myvi"
  | "youmite"
  | "viuly"
  | "stormo"
  | "mediafile";

export type VideoId = number;

export interface Video {
  id: VideoId;
  url: string;
  image_url: string;
  player_url: string;
  name: string | null;
  kind: VideoKind;
  hosting: VideoHosting;
}
