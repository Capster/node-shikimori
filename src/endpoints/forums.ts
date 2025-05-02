import { RequestMethods } from "../apiProvider";
import { Forum } from "../types";

/**
 * Forums
 * @param methods
 */
export const forums = ({ get }: RequestMethods) => {
  /**
   * List forums
   * @param params
   */
  const list = (): Promise<Forum[]> => get("/forums", {});

  return { list };
};
