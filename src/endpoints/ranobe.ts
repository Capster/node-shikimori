import { RequestMethods } from "../apiProvider";
import {
  Role,
  Topic,
  Ranobe,
  RanobeId,
  Franchise,
  RanobeKind,
  RanobeBasic,
  RanobeOrder,
  RanobeStatus,
  ExternalLink,
  UserRateStatus,
  RanobeRelation,
} from "../types";
import { Id } from "./common";

export interface RanobeParams {
  page?: number;
  limit?: number;
  order?: RanobeOrder;
  kind?: RanobeKind;
  status?: RanobeStatus;
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

export interface RanobeTopicsParams {
  id: RanobeId;
  page?: number;
  limit?: number;
}

/**
 * Ranobe
 * @param methods
 */
export const ranobe = ({ get }: RequestMethods) => {
  /**
   * List ranobe
   * @param params
   */
  const list = (params: RanobeParams): Promise<RanobeBasic[]> =>
    get(`/ranobes`, params);

  /**
   * Get a ranobe by `RanobeId`
   * @param params
   */
  const byId = ({ id }: Id<RanobeId>): Promise<Ranobe> =>
    get(`/ranobes/${id}`, {});

  /**
   * List ranobe roles
   * @param params
   */
  const roles = ({ id }: Id<RanobeId>): Promise<Role[]> =>
    get(`/ranobes/${id}/roles`, {});

  /**
   * List similar ranobe
   * @param params
   */
  const similar = ({ id }: Id<RanobeId>): Promise<RanobeBasic[]> =>
    get(`/ranobes/${id}/similar`, {});

  /**
   * List related ranobe
   * @param params
   */
  const related = ({ id }: Id<RanobeId>): Promise<RanobeRelation[]> =>
    get(`/ranobes/${id}/relation`, {});

  /**
   * List the whole franchise
   * @param params
   */
  const franchise = ({ id }: Id<RanobeId>): Promise<Franchise> =>
    get(`/ranobes/${id}/franchise`, {});

  /**
   * List external links of a ranobe
   * @param params
   */
  const externalLinks = ({ id }: Id<RanobeId>): Promise<ExternalLink[]> =>
    get(`/ranobes/${id}/external_links`, {});

  /**
   * List ranobe topics
   * @param params
   */
  const topics = ({
    id,
    ...params
  }: RanobeTopicsParams): Promise<Topic<RanobeBasic>[]> =>
    get(`/ranobes/${id}/topics`, params);

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
