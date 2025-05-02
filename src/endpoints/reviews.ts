import { RequestMethods } from "../apiProvider";
import { Notice, Review, ReviewId } from "../types";
import { Id } from "./common";

export interface ReviewsCreateParams {
  frontend?: boolean;
  review: Pick<Review, "anime_id" | "body" | "opinion">;
}

export interface ReviewsUpdateParams {
  id: ReviewId;
  frontend?: boolean;
  review: Pick<Review, "body" | "opinion">;
}

/**
 * Reviews
 * @param methods
 */
export const reviews = ({ post, patch, _delete }: RequestMethods) => {
  /**
   * Create a review
   * @param params
   */
  const create = (params: ReviewsCreateParams): Promise<Review> =>
    post("/reviews", params);

  /**
   * Update a review
   * @param params
   */
  const update = ({ id, ...params }: ReviewsUpdateParams): Promise<Review> =>
    patch(`/reviews/${id}`, params);

  /**
   * Delete a review
   * @param params
   */
  const destroy = ({ id }: Id<ReviewId>): Promise<Notice> =>
    _delete(`/reviews/${id}`, {});

  return {
    create,
    update,
    destroy,
  };
};
