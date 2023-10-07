import { RequestMethods } from '../apiProvider';
import { AbuseRequest, CommentId, TopicId } from '../types';

/** @interface */
export type AbuseRequestsOfftopicParams = Record<'comment_id', CommentId>;

export interface AbuseRequestsReviewParams {
  comment_id?: CommentId,
  topic_id?: TopicId,
}

export interface AbuseRequestsAbuseParams {
  comment_id?: CommentId,
  topic_id?: TopicId,
  reason?: string,
}

/**
 * Abuse Requests
 * @param methods
 */
export const abuseRequests = ({ post }: RequestMethods) => {
  /**
   * Mark comment as offtopic
   * @param params
   */
  const offtopic = (params: AbuseRequestsOfftopicParams): Promise<AbuseRequest> => (
    post('/v2/abuse_requests/offtopic', params)
  );

  /**
   * Convert comment to review
   * @param params
   */
  const review = (params: AbuseRequestsReviewParams): Promise<void> => (
    post('/v2/abuse_requests/review', params)
  );

  /**
   * Create abuse about violation of site rules
   * @param params
   */
  const abuse = (params: AbuseRequestsAbuseParams): Promise<void> => (
    post('/v2/abuse_requests/abuse', params)
  );

  /**
   * Create abuse about spoiler in content
   * @param params
   */
  const spoiler = (params: AbuseRequestsAbuseParams): Promise<void> => (
    post('/v2/abuse_requests/spoiler', params)
  );

  return {
    offtopic,
    review,
    abuse,
    spoiler
  }
};
