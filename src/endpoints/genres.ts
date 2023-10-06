import { RequestMethods } from '../apiProvider';
import { Genre } from '../types';

/**
 * Genres
 * @param methods
 */
export const genres = ({ get }: RequestMethods) => {
  /**
   * List genres
   * @param params
   */
  const list = (): Promise<Genre[]> => get('/genre', {});

  return { list };
};
