import { RequestMethods } from '../apiProvider';
import {
  Role,
  Anime,
  Topic,
  AnimeId,
  AnimeKind,
  Franchise,
  AnimeBasic,
  AnimeOrder,
  Screenshot,
  AnimeRating,
  AnimeStatus,
  ExternalLink,
  AnimeDuration,
  AnimeRelation,
  AnimeTopicKind,
  UserRateStatus,
} from '../types';
import { Id } from './common';

export interface AnimesParams {
  page?: number,
  limit?: number,
  order?: AnimeOrder,
  kind?: AnimeKind,
  status?: AnimeStatus,
  season?: string,
  score?: number,
  duration?: AnimeDuration,
  rating?: AnimeRating,
  genre?: string,
  studio?: string,
  franchise?: string,
  censored?: boolean,
  mylist?: UserRateStatus,
  ids?: string,
  exclude_ids?: string,
  search?: string,
}

export interface AnimesTopicsParams {
  id: AnimeId,
  page?: number,
  limit?: number,
  kind?: AnimeTopicKind,
  episode?: number,
}

/**
 * Animes
 * @param methods
 */
export const animes = ({ get }: RequestMethods) => {
  /**
   * List animes
   * @param params
   */
  const list = (params: AnimesParams): Promise<AnimeBasic[]> => (
    get(`/animes`, params)
  );

  /**
   * Get an anime by `AnimeId`
   * @param params
   */
  const byId = ({ id }: Id<AnimeId>): Promise<Anime> => (
    get(`/animes/${id}`, {})
  );

  /**
   * List anime roles
   * @param params
   */
  const roles = ({ id }: Id<AnimeId>): Promise<Role[]> => (
    get(`/animes/${id}/roles`, {})
  );

  /**
   * List similar anime
   * @param params
   */
  const similar = ({ id }: Id<AnimeId>): Promise<AnimeBasic[]> => (
    get(`/animes/${id}/similar`, {})
  );

  /**
   * List related anime
   * @param params
   */
  const related = ({ id }: Id<AnimeId>): Promise<AnimeRelation[]> => (
    get(`/animes/${id}/relation`, {})
  );

  /**
   * List anime screenshots
   * @param params
   */
  const screenshots = ({ id }: Id<AnimeId>): Promise<Screenshot[]> => (
    get(`/animes/${id}/screenshots`, {})
  );

  /**
   * Show the whole franchise
   * @param params
   */
  const franchise = ({ id }: Id<AnimeId>): Promise<Franchise> => (
    get(`/animes/${id}/franchise`, {})
  );

  /**
   * List external links of an anime
   * @param params
   */
  const externalLinks = ({ id }: Id<AnimeId>): Promise<ExternalLink[]> => (
    get(`/animes/${id}/external_links`, {})
  );

  /**
   * List anime topics
   * @param params
   */
  const topics = ({ id, ...params }: AnimesTopicsParams): Promise<Topic<AnimeBasic>[]> => (
    get(`/animes/${id}/topics`, params)
  );

  return {
    list,
    byId,
    roles,
    similar,
    related,
    screenshots,
    franchise,
    externalLinks,
    topics,
  }
};
