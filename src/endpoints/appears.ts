import { RequestMethods } from "../apiProvider";

/** @interface */
export type AppearsParams = Record<"ids", string>;

/**
 * Appear
 * @param methods
 */
export const appears = ({ post }: RequestMethods) => {
  /**
   * Mark comments or topics as read
   * @param params
   */
  const markAsRead = (params: AppearsParams): Promise<null> =>
    post("/appears", params);

  return { markAsRead };
};
