import { RequestMethods } from '../apiProvider';
import { Achievement, UserId } from '../types';

/** @interface */
export type AchievementsParams = Record<'user_id', UserId>;

/**
 * Achievements
 * @param methods
 */
export const achievements = (params: RequestMethods) => {
  const { get } = params;
  /**
   * List user achievements
   * @param params
   */
  const list = (params: AchievementsParams): Promise<Achievement[]> => ( 
    get('/achievements', params)
  );

  return { list }
};
