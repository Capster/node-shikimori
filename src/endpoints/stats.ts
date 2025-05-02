import { RequestMethods } from "../apiProvider";
import { UserId } from "../types";

/**
 * Stats
 * @param methods
 */
export const stats = ({ get }: RequestMethods) => {
  /**
   * Users having at least 1 completed animes and active during last month
   * @param params
   */
  const activeUsers = (): Promise<UserId[]> => get("/stats/active_users", {});

  return { activeUsers };
};
