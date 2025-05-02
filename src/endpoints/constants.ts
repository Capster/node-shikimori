import { RequestMethods } from "../apiProvider";
import { ContentConstants, UserRateConstants } from "../types/";

/**
 * Constants
 * @param methods
 */
export const constants = ({ get }: RequestMethods) => {
  /**
   * List anime-related constants
   * @param params
   */
  const anime = (): Promise<ContentConstants> => get("/constants/anime", {});

  /**
   * List manga-related constants
   * @param params
   */
  const manga = (): Promise<ContentConstants> => get("/constants/manga", {});

  /**
   * List user rate-related constants
   * @param params
   */
  const userRate = (): Promise<UserRateConstants> =>
    get("/constants/user_rate", {});

  /**
   * List club-related constants
   * @param params
   */
  const club = (): Promise<ContentConstants> => get("/constants/club", {});

  /**
   * List all available smileys
   * @param params
   */
  const smileys = (): Promise<ContentConstants> =>
    get("/constants/smileys ", {});

  return {
    anime,
    manga,
    userRate,
    club,
    smileys,
  };
};
