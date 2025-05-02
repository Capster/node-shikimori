import { CommentBasic } from "./Comment";
import { UserId, UserBasic } from "./User";

export type BanId = number;

export interface Ban {
  id: BanId;
  user_id: UserId;
  comment: CommentBasic;
  moderator_id: number;
  reason: string;
  created_at: string;
  duration_minutes: number;
  user: UserBasic;
  moderator: UserBasic;
}
