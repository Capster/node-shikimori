import { RequestMethods } from "../apiProvider";
import { UserId, UserIgnore } from "../types";

/** @interface */
export type UserIgnoreParams = Record<'user_id', UserId>;

/**
 * User ignores
 * @param methods
 */
export const userIgnores = ({ post, _delete }: RequestMethods) => {
  /**
   * Ignore a user
   *
   * Requires `ignores` oauth scope
   * @param params
   */
  const ignore = ({ user_id }: UserIgnoreParams): Promise<UserIgnore> => (
    post(`/v2/users/${user_id}/ignore`, {})
  );

  /**
   * Unignore a user
   *
   * Requires `ignores` oauth scope
   * @param params
   */
  const unignore = ({ user_id }: UserIgnoreParams): Promise<UserIgnore> => (
    _delete(`/v2/users/${user_id}/ignore`, {})
  );

  return { ignore, unignore };
};
