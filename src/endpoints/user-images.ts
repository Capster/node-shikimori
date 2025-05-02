import { RequestMethods } from "../apiProvider";
import { UserImage } from "../types";

export interface UserImagesCreateParams {
  image: string;
  linked_type?: string;
}

/**
 * User Images
 * @param methods
 */
export const userImages = ({ post }: RequestMethods) => {
  /**
   * Create a user image
   * @param params
   */
  const create = (params: UserImagesCreateParams): Promise<UserImage> =>
    post(`/user_images`, params);

  return { create };
};
