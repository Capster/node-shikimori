import { RequestMethods } from "../apiProvider";
import { Studio } from "../types";

/**
 * Studios
 * @param methods
 */
export const studios = ({ get }: RequestMethods) => {
  /**
   * List studios
   * @param params
   */
  const list = (): Promise<Studio[]> => get("/studios", {});

  return { list };
};
