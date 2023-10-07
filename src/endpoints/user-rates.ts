import { RequestMethods } from "../apiProvider";
import { UserId, UserRateBasic, UserRateId, UserRateStatus, UserRateTemplate } from "../types";
import { Id } from "./common";

export interface UserRatesListParams {
  user_id?: UserId,
  target_id?: number,
  target_type?: 'Anime' | 'Manga',
  status?: UserRateStatus,
  page?: number,
  limit?: number,
}

export interface UserRateCreateParams {
  user_rate?: UserRateTemplate,
}

export interface UserRateUpdateParams {
  id: UserRateId,
  user_rate?: Omit<UserRateTemplate, 'user_id' | 'target_id' | 'target_type'>,
}

/**
 * User rates
 * @param methods
 */
export const userRates = ({ get, post, patch, _delete }: RequestMethods) => {
  /**
   * List user rates
   * @param params
   */
  const list = (params: UserRatesListParams): Promise<UserRateBasic[]> => (
    get(`/v2/users_rates/`, params)
  );

  /**
   * Get a user rate by `UserRateId`
   * @param params
   */
  const byId = ({ id }: Id<UserRateId>): Promise<UserRateBasic> => (
    get(`/v2/users_rates/${id}`, {})
  );

  /**
   * Create a user rate
   *
   * Requires `user_rates` oauth scope
   * @param params
   */
  const create = (params: UserRateCreateParams): Promise<UserRateBasic> => (
    post(`/v2/users_rates/`, params)
  );

  /**
   * Update a user rate
   *
   * Requires `user_rates` oauth scope
   * @param params
   */
  const update = ({ id, ...params }: UserRateUpdateParams): Promise<UserRateBasic> => (
    patch(`/v2/users_rates/${id}`, params)
  );

  /**
   * Increment episodes/chapters by 1
   *
   * Requires `user_rates` oauth scope
   * @param params
   */
  const increment = ({ id }: Id<UserRateId>): Promise<UserRateBasic> => (
    post(`/v2/users_rates/${id}/increment`, {})
  );

  /**
   * Delete a user rate
   *
   * Requires `user_rates` oauth scope
   * @param params
   */
  const destroy = ({ id }: Id<UserRateId>): Promise<UserRateBasic> => (
    _delete(`/v2/users_rates/${id}`, {})
  );

  return {
    list,
    byId,
    create,
    update,
    increment,
    destroy,
  }
};
