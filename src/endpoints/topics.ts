import { RequestMethods } from '../apiProvider';
import { ForumId, LinkedId, LinkedType, Notice, Topic, TopicBasic, TopicForum, TopicId, TopicType, UserId } from '../types';
import { Id } from './common';

export interface TopicsListParams {
  page?: number,
  limit?: number,
  forum?: TopicForum,
  linked_id?: LinkedId,
  linked_type?: LinkedType,
  type?: TopicType,
}

export interface TopicsUpdatesParams {
  page: number,
  limit: number,
}

/** @interface */
export type TopicsHotParams = Record<'limit', number>;

export interface TopicTemplate {
  body: string,
  forum_id: ForumId,
  linked_id?: LinkedId,
  linked_type?: LinkedType,
  title: string,
  type: TopicType,
  user_id: UserId,
}

/** @interface */
export type TopicsCreateParams = Record<'topic', TopicTemplate>;

export interface TopicUpdateTemplate {
  body?: string,
  linked_id?: LinkedId,
  linked_type?: LinkedType,
  title?: string,
}

export interface TopicsUpdateParams {
  topic: TopicsUpdateParams,
}

/**
 * Topics
 * @param methods
 */
export const topics = ({ get, post, _delete }: RequestMethods) => {
  /**
   * List topics
   * @param params
   */
  const list = (params: TopicsListParams): Promise<Topic[]> => (
    get(`/topics`, params)
  );

  /**
   * List NewsTopics about database updates
   * @param params
   */
  const updates = (params: TopicsUpdatesParams): Promise<TopicBasic[]> => (
    get(`/topics/updates`, params)
  );

  /**
   * List hot topics
   * @param params
   */
  const hot = (params: TopicsHotParams): Promise<Topic[]> => (
    get(`/topics/hot`, params)
  );

  /**
   * Get a topic by `TopicId`
   * @param params
   */
  const byId = ({ id }: Id<TopicId>): Promise<Topic> => (
    get(`/topics/${id}`, {})
  );

  /**
   * Create a topic
   *
   * Requires `topics` oauth scope
   * @param params
   */
  const create = (params: TopicsCreateParams): Promise<Topic> => (
    post(`/topics`, params)
  );

  /**
   * Update a topic
   *
   * Requires `topics` oauth scope
   * @param params
   */
  const update = (params: TopicsUpdateParams): Promise<Topic> => (
    post(`/topics`, params)
  );

  /**
   * Delete a topic
   *
   * Requires `topics` oauth scope
   * @param params
   */
  const destroy = ({ id }: Id<TopicId>): Promise<Notice> => (
    _delete(`/topics/${id}`, {})
  );

  return {
    list,
    updates,
    hot,
    byId,
    create,
    update,
    destroy,
  }
}
