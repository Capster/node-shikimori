import { RequestMethods } from "../apiProvider";
import { Character, CharacterBasic, CharacterId } from "../types";

/** @interface */
export type CharactersParams = Record<"id", CharacterId>;
/** @interface */
export type CharactersSearchParams = Record<"search", string>;

/**
 * Characters
 * @param methods
 */
export const characters = ({ get }: RequestMethods) => {
  /**
   * Get a character by `CharacterId`
   * @param params
   */
  const byId = ({ id }: CharactersParams): Promise<Character> =>
    get(`/characters/${id}`, {});

  /**
   * Search characters
   * @param params
   */
  const search = (params: CharactersSearchParams): Promise<CharacterBasic[]> =>
    get(`/characters/search`, params);

  return { byId, search };
};
