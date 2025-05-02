import { RequestMethods } from "../apiProvider";
import { Id } from "./common";
import {
  Notice,
  Comment,
  CommentId,
  CommentTemplate,
  CommentableType,
} from "../types";

export interface CommentsParams {
  commentable_id: number;
  commentable_type: CommentableType;
  page?: number;
  limit?: number;
  desc?: 1 | 0;
}

export interface CommentsCreateParams {
  comment?: CommentTemplate;
  frontend?: boolean;
  broadcast?: boolean;
}

export interface CommentsUpdateParams {
  id: CommentId;
  comment?: Record<"body", string>;
  frontend?: boolean;
}

/**
 * Comments
 * @param methods
 */
export const comments = ({ get, post, patch, _delete }: RequestMethods) => {
  /**
   * List comments
   * @param params
   */
  const list = (params: CommentsParams): Promise<Comment[]> =>
    get("/comments", params);

  /**
   * Get a comment by `CommentId`
   * @param params
   */
  const byId = ({ id }: Id<CommentId>): Promise<Comment> =>
    get(`/comments/${id}`, {});

  /**
   * Create a comment
   * @param params
   */
  const create = (params: CommentsCreateParams): Promise<Comment> =>
    post("/comments", params);

  /**
   * Update a comment
   * @param params
   */
  const update = ({ id, ...params }: CommentsUpdateParams): Promise<Comment> =>
    patch(`/comments/${id}`, params);

  /**
   * Delete a comment
   * @param params
   */
  const destroy = ({ id }: Id<CommentId>): Promise<Notice> =>
    _delete(`/comments/${id}`, {});

  return {
    list,
    byId,
    create,
    update,
    destroy,
  };
};
