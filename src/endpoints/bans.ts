import { RequestMethods } from "../apiProvider";
import { Ban } from "../types";

/**
 * Bans
 * @param methods
 */
export const bans = ({ get }: RequestMethods) => {
  /**
   * List bans
   * @param params
   */
  const list = (): Promise<Ban[]> => get("/bans", {});

  return { list };
};
