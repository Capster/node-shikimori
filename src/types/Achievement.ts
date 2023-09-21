import { DateTime } from "./common";
import { UserId } from "./User";

export type AchievementId = number;

export interface Achievement {
  id: AchievementId,
  neko_id: string,
  level: number,
  progress: number,
  user_id: UserId,
  created_at: DateTime,
  updated_at: DateTime,
}
