import { RequestMethods } from "../apiProvider";
import { TopicId, TopicIgnore } from "../types";

/** @interface */
export type TopicIgnoreParams = Record<'topic_id', TopicId>;

/**
 * Topic ignores
 * @param methods
 */
export const topicIgnores = ({ post, _delete }: RequestMethods) => {
  /**
   * Ignore a topic
   *
   * Requires `ignores` oauth scope
   * @param params
   */
  const ignore = ({ topic_id }: TopicIgnoreParams): Promise<TopicIgnore> => (
    post(`/v2/topics/${topic_id}/ignore`, {})
  );

  /**
   * Unignore a topic
   *
   * Requires `ignores` oauth scope
   * @param params
   */
  const unignore = ({ topic_id }: TopicIgnoreParams): Promise<TopicIgnore> => (
    _delete(`/v2/topics/${topic_id}/ignore`, {})
  );

  return { ignore, unignore };
};
