import { RequestMethods } from '../apiProvider';
import { EpisodeNotification, EpisodeNotificationTemplate } from '../types';

export interface EpisodeNotificationsParams {
  episode_notification: EpisodeNotificationTemplate,
  token: string,
}

/**
 * Episode notifications
 * @param methods
 */
export const episodeNotifications = ({ post }: RequestMethods) => {
  /**
   * Notify shikimori about anime episode release
   *
   * This API requires a special token
   * @param params
   */
  const list = (params: EpisodeNotificationsParams): Promise<EpisodeNotification> => (
    post('/v2/episode_notifications', params)
  );

  return { list };
};
