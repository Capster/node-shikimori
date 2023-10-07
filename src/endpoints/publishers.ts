import { RequestMethods } from '../apiProvider';
import { Publisher } from '../types';

/**
 * Publishers
 * @param methods
 */
export const publishers = ({ get }: RequestMethods) => {
  /**
   * List publishers
   * @param params
   */
  const list = (): Promise<Publisher[]> => get('/publishers', {});

  return { list }
};
