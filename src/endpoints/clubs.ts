import { RequestMethods } from "../apiProvider";
import {
  AnimeBasic,
  CharacterBasic,
  Club,
  ClubBasic,
  ClubId,
  ClubUpdateTemplate,
  Image,
  MangaBasic,
  RanobeBasic,
  Topic,
  UserBasic,
} from "../types";
import { Id } from "./common";

export interface ClubsParams {
  page?: number;
  limit?: number;
  search?: string;
}

export interface ClubsUpdateParams {
  id: ClubId;
  club?: ClubUpdateTemplate;
}

export interface ClubsContentParams {
  id: number;
  page?: number;
  limit?: number;
}

/**
 * Clubs
 * @param methods
 */
export const clubs = ({ get, post, patch }: RequestMethods) => {
  /**
   * List clubs
   * @param params
   */
  const list = (params: ClubsParams): Promise<ClubBasic[]> =>
    get("/clubs", params);

  /**
   * Get a club by `ClubId`
   * @param params
   */
  const byId = ({ id }: Id<ClubId>): Promise<Club> => get(`/clubs/${id}`, {});

  /**
   * Update a club
   * @param params
   */
  const update = ({ id }: ClubsUpdateParams): Promise<Club> =>
    patch(`/clubs/${id}`, {});

  /**
   * Show club's animes
   * @param params
   */
  const animes = ({
    id,
    ...params
  }: ClubsContentParams): Promise<AnimeBasic[]> =>
    get(`/clubs/${id}/animes`, params);

  /**
   * Show club's mangas
   * @param params
   */
  const mangas = ({
    id,
    ...params
  }: ClubsContentParams): Promise<MangaBasic[]> =>
    get(`/clubs/${id}/mangas`, params);

  /**
   * Show club's ranobe
   * @param params
   */
  const ranobe = ({
    id,
    ...params
  }: ClubsContentParams): Promise<RanobeBasic[]> =>
    get(`/clubs/${id}/ranobe`, params);

  /**
   * Show club's characters
   * @param params
   */
  const characters = ({
    id,
    ...params
  }: ClubsContentParams): Promise<CharacterBasic[]> =>
    get(`/clubs/${id}/characters`, params);

  /**
   * Show club's collections
   * @param params
   */
  const collections = ({
    id,
    ...params
  }: ClubsContentParams): Promise<Topic[]> =>
    get(`/clubs/${id}/collections`, params);

  /**
   * Show club's friendly clubs
   * @param params
   */
  const clubs = ({ id, ...params }: ClubsContentParams): Promise<ClubBasic[]> =>
    get(`/clubs/${id}/clubs`, params);

  /**
   * Show club's members
   * @param params
   */
  const members = ({
    id,
    ...params
  }: ClubsContentParams): Promise<UserBasic[]> =>
    get(`/clubs/${id}/members`, params);

  /**
   * Show club's images
   * @param params
   */
  const images = ({ id, ...params }: ClubsContentParams): Promise<Image[]> =>
    get(`/clubs/${id}/images`, params);

  /**
   * Join a club
   * @param params
   */
  const join = ({ id }: Id<ClubId>): Promise<void> =>
    post(`/clubs/${id}/join`, {});

  /**
   * Leave a club
   * @param params
   */
  const leave = ({ id }: Id<ClubId>): Promise<void> =>
    post(`/clubs/${id}/leave`, {});

  return {
    list,
    byId,
    update,
    animes,
    mangas,
    ranobe,
    characters,
    collections,
    clubs,
    members,
    images,
    join,
    leave,
  };
};
