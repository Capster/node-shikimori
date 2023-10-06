import { RequestMethods } from '../apiProvider';
import { Notice, UserId } from '../types';
import { Id } from './common';

/**
 * Friends
 * @param methods
 */
export const friends = ({ post, _delete }: RequestMethods) => {
  /**
   * Add user to the friendlist by `UserId`
   * @param params
   */
  const create = ({ id }: Id<UserId>): Promise<Notice[]> => (
    post(`/friends/${id}`, {})
  );

  /**
   * Remove user from the friendlist by `UserId`
   * @param params
   */
  const destroy = ({ id }: Id<UserId>): Promise<Notice> => (
    _delete(`/friends/${id}`, {})
  );

  return { create, destroy };
};
