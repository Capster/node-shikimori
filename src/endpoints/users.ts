import { RequestMethods } from "../apiProvider";
import {
  AnimeBasic,
  Ban,
  ClubBasic,
  MangaBasic,
  Message,
  MessageType,
  User,
  UserBasic,
  UserFavourites,
  UserHistoryRecord,
  UserId,
  UserRateExtended,
  UserRateStatus,
  UserUnreadMessages,
} from "../types";
import { Id } from "./common";

export interface UsersListParams {
  page?: number;
  limit?: number;
}

export interface UsersByIdParams {
  id: number | string;
  is_nickname?: boolean;
}

export interface UsersAnimeRatesParams {
  id: UserId;
  page: number;
  limit: number;
  status: UserRateStatus;
  censored: boolean;
}

/** @interface */
export type UsersMangaRatesParams = Omit<UsersAnimeRatesParams, "status">;

export interface UsersMessagesParams {
  id: UserId;
  page?: number;
  limit?: number;
  type: MessageType;
}

export interface UsersHistoryParams {
  id: UserId;
  page: number;
  limit: number;
  target_id: number;
  target_type: "Anime" | "Manga";
}

/**
 * Users
 * @param methods
 */
export const users = ({ get }: RequestMethods) => {
  /**
   * List users
   * @param params
   */
  const list = (params: UsersListParams): Promise<UserBasic[]> =>
    get(`/users`, params);

  /**
   * Get a user by `UserId`
   * @param params
   */
  const byId = ({ id, ...params }: UsersByIdParams): Promise<User> =>
    get(`/users/${id}`, params);

  /**
   * Get a brief information of a user
   * @param params
   */
  const info = ({ id }: Id<UserId>): Promise<User> =>
    get(`/users/${id}/info`, {});

  /**
   * Get a brief information of the current user
   * @param params
   */
  const whoami = (): Promise<User> => get(`/users/whoami`, {});

  /**
   * Sign out from an account
   * @param params
   */
  const signOut = (): Promise<string> => get(`/users/sign_out`, {});

  /**
   * List user's friends
   * @param params
   */
  const friends = ({ id }: Id<UserId>): Promise<UserBasic[]> =>
    get(`/users/${id}/friends`, {});

  /**
   * List user's clubs
   * @param params
   */
  const clubs = ({ id }: Id<UserId>): Promise<ClubBasic[]> =>
    get(`/users/${id}/clubs`, {});

  /**
   * Get user's anime list
   * @param params
   */
  const animeRates = ({
    id,
    ...params
  }: UsersAnimeRatesParams): Promise<UserRateExtended<AnimeBasic>> =>
    get(`/users/${id}/anime_rates`, params);

  /**
   * Get user's manga list
   * @param params
   */
  const mangaRates = ({
    id,
    ...params
  }: UsersMangaRatesParams): Promise<UserRateExtended<MangaBasic>> =>
    get(`/users/${id}/manga_rates`, params);

  /**
   * List user's favourites
   * @param params
   */
  const favourites = ({ id }: Id<UserId>): Promise<UserFavourites> =>
    get(`/users/${id}/favourites`, {});

  /**
   * List messages between the current user and any other user
   *
   * Requires `messages` oauth scope
   * @param params
   */
  const messages = ({
    id,
    ...params
  }: UsersMessagesParams): Promise<Message[]> =>
    get(`/users/${id}/messages`, params);

  /**
   * Get a user by `UserId`
   * @param params
   */
  const unreadMessages = ({ id }: Id<UserId>): Promise<UserUnreadMessages> =>
    get(`/users/${id}/unread_messages`, {});

  /**
   * Get user history
   * @param params
   */
  const history = ({
    id,
    ...params
  }: UsersHistoryParams): Promise<UserHistoryRecord[]> =>
    get(`/users/${id}/history`, params);

  /**
   * List ban history of a user
   * @param params
   */
  const bans = ({ id }: Id<UserId>): Promise<Ban[]> =>
    get(`/users/${id}/bans`, {});

  return {
    list,
    byId,
    info,
    whoami,
    signOut,
    friends,
    clubs,
    animeRates,
    mangaRates,
    favourites,
    messages,
    unreadMessages,
    history,
    bans,
  };
};
