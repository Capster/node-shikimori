import { CommentBasic } from "./comment";
import { UserId, UserBasic } from "./user";

export type BanId = number;

export interface Ban {
  id: BanId,
  user_id: UserId,
  comment: CommentBasic,
  moderator_id: number,
  reason: string,
  created_at: string,
  duration_minutes: number,
  user: UserBasic,
  moderator: UserBasic,
}
