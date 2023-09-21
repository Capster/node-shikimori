import { UserBasic, UserId } from "./User";

export type CommentableType = 'Topic'
  | 'User'
  | 'Anime'
  | 'Manga'
  | 'Character'
  | 'Person'
  | 'Article'
  | 'Club'
  | 'ClubPage'
  | 'Collection'
  | 'Critique'
  | 'Review';

export type CommentId = number;

export interface Comment {
  id: CommentId,
  user_id: UserId,
  commentable_id: number,
  commentable_type: CommentableType,
  body: string,
  html_body: string,
  created_at: Date,
  updated_at: Date,
  is_offtopic: boolean,
  is_summary: boolean,
  can_be_edited: boolean,
  user: UserBasic,
}

export type CommentBasic = Pick<Comment, 'id' | 'commentable_id' | 'commentable_type' | 'body' | 'user_id' | 'created_at' | 'updated_at' | 'is_offtopic'>;
export type CommentTemplate = Pick<Comment, 'body' | 'commentable_id' | 'commentable_type' | 'is_offtopic'>;
