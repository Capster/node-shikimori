import { RequestMethods } from "../apiProvider";
import { NoticeSuccess } from "../types";

export type FavoritesLinkedType =
  | "Anime"
  | "Manga"
  | "Ranobe"
  | "Person"
  | "Character";
export type FavoritesKind =
  | "common"
  | "seyu"
  | "mangaka"
  | "producer"
  | "person";

export interface FavoritesCreateParams {
  linked_id: number;
  linked_type: FavoritesLinkedType;
  kind?: FavoritesKind;
}

export interface FavoritesDestroyParams {
  linked_id: number;
  linked_type: FavoritesLinkedType;
}

export interface FavoritesReorderParams {
  id: number;
  new_index: FavoritesLinkedType;
}

/**
 * Favorites
 * @param methods
 */
export const favorites = ({ get, post, _delete }: RequestMethods) => {
  /**
   * Add to favorites
   * @param params
   */
  const create = ({
    linked_id,
    linked_type,
    kind,
  }: FavoritesCreateParams): Promise<NoticeSuccess> => {
    const favoritesKind = kind ? `/${kind}` : "";
    return get(`/favorites/${linked_type}/${linked_id}${favoritesKind}`, {});
  };

  /**
   * Remove from favorites
   * @param params
   */
  const destroy = ({
    linked_type,
    linked_id,
  }: FavoritesDestroyParams): Promise<NoticeSuccess> =>
    _delete(`/favorites/${linked_type}/${linked_id}`, {});

  /**
   * Assign a new position to a favorite
   * @param params
   */
  const reorder = ({ id, ...params }: FavoritesReorderParams): Promise<void> =>
    post(`/favorites/${id}/reorder`, params);

  return {
    create,
    destroy,
    reorder,
  };
};
