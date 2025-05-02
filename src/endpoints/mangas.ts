import { RequestMethods } from "../apiProvider";
import {
  Role,
  Topic,
  Manga,
  MangaId,
  MangaKind,
  Franchise,
  MangaOrder,
  MangaBasic,
  MangaStatus,
  ExternalLink,
  MangaRelation,
  UserRateStatus,
} from "../types";
import { Id } from "./common";

export interface MangasParams {
  page?: number;
  limit?: number;
  order?: MangaOrder;
  kind?: MangaKind;
  status?: MangaStatus;
  season?: string;
  score?: number;
  genre?: string;
  publisher?: string;
  franchise?: string;
  censored?: boolean;
  mylist?: UserRateStatus;
  ids?: string;
  exclude_ids?: string;
  search?: string;
}

export interface MangaTopicsParams {
  id: MangaId;
  page?: number;
  limit?: number;
}

/**
 * Mangas
 * @param methods
 */
export const mangas = ({ get }: RequestMethods) => {
  /**
   * List mangas
   * @param params
   */
  const list = (params: MangasParams): Promise<MangaBasic[]> =>
    get(`/mangas`, params);

  /**
   * Get a manga by `MangaId`
   * @param params
   */
  const byId = ({ id }: Id<MangaId>): Promise<Manga> =>
    get(`/mangas/${id}`, {});

  /**
   * List manga roles
   * @param params
   */
  const roles = ({ id }: Id<MangaId>): Promise<Role[]> =>
    get(`/mangas/${id}/roles`, {});

  /**
   * List similar manga
   * @param params
   */
  const similar = ({ id }: Id<MangaId>): Promise<MangaBasic[]> =>
    get(`/mangas/${id}/similar`, {});

  /**
   * List related manga
   * @param params
   */
  const related = ({ id }: Id<MangaId>): Promise<MangaRelation[]> =>
    get(`/mangas/${id}/relation`, {});

  /**
   * List the whole franchise
   * @param params
   */
  const franchise = ({ id }: Id<MangaId>): Promise<Franchise> =>
    get(`/mangas/${id}/franchise`, {});

  /**
   * List external links of a manga
   * @param params
   */
  const externalLinks = ({ id }: Id<MangaId>): Promise<ExternalLink[]> =>
    get(`/mangas/${id}/external_links`, {});

  /**
   * List manga topics
   * @param params
   */
  const topics = ({
    id,
    ...params
  }: MangaTopicsParams): Promise<Topic<MangaBasic>[]> =>
    get(`/mangas/${id}/topics`, params);

  return {
    list,
    byId,
    roles,
    similar,
    related,
    franchise,
    externalLinks,
    topics,
  };
};
