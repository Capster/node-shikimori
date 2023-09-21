import { DateTime } from ".";
import { ImageSet } from "./image";

export type UserId = number;

export interface User {
  id: UserId,
  nickname: string,
  avatar: string,
  image: ImageSet,
  last_online_at: DateTime| null,
  url: string,
  name: string | null,
  sex: string | null,
  full_years: number | null,
  last_online: string | null,
  website: string | null,
  location: string | null,
  banned: boolean,
  about: string,
  about_html: string,
  common_info: string[],
  show_comments: boolean,
  in_friends: boolean | null,
  is_ignored: boolean,
  stats: UserStats,
  style_id: number | null,
}

export type UserBasic = Pick<User, 'id' | 'nickname' | 'avatar' | 'image' | 'last_online_at' | 'url'>;

interface UserStatsStatus {
  id: number,
  grouped_id: string,
  name: string,
  size: number,
  type: string,
}

export interface UserActivity {
  name: [number, number],
  value: number,
}

export type UserContentKind = 'anime' | 'manga';

interface UserStats {
  statuses: Record<UserContentKind, UserStatsStatus>,
  full_statuses: Record<UserContentKind, UserStatsStatus>,
  scores: Record<UserContentKind, UserStatsStatus>,
  types: Record<UserContentKind, UserStatsStatus>,
  ratings: {
    anime: UserStatsStatus,
  },
  'has_anime?': boolean,
  'has_manga?': boolean,
  genres: unknown[],
  studios: unknown[],
  publishers: unknown[],
  activity: UserActivity[],
}