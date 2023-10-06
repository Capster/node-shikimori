import { RequestMethods } from '../apiProvider';
import { AnimeId, Video, VideoId } from '../types';

/** @interface */
export type VideosListParams = Record<'anime_id', AnimeId>;

export interface VideosCreateParams {
  anime_id: AnimeId,
  video: Pick<Video, 'kind' | 'name' | 'url'>,
}

export interface VideosDestroyParams {
  anime_id: AnimeId,
  video_id: VideoId,
}

/**
 * Videos
 * @param methods
 */
export const videos = ({ get, post, _delete }: RequestMethods) => {
  /**
   * Get an array of videos by `AnimeId`
   * @param params
   */
  const byId = ({ anime_id }: VideosListParams): Promise<Video[]> => (
    get(`/animes/${anime_id}/videos`, {})
  );

  /**
   * Create a videos
   *
   * Requires `content` oauth scope
   * @param params
   */
  const create = ({ anime_id, ...params }: VideosCreateParams): Promise<Video> => (
    post(`/animes/${anime_id}/videos`, params)
  );

  /**
   * Delete a video
   *
   * Requires `content` oauth scope
   * @param params
   */
  const destroy = ({ anime_id, video_id }: VideosDestroyParams): Promise<void> => (
    _delete(`/animes/${anime_id}/videos/${video_id}`, {})
  );

  return {
    byId,
    create,
    destroy,
  };
};
