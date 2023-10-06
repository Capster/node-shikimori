import { RequestMethods } from '../apiProvider';
import { Style, StyleId } from '../types';
import { Id } from './common';

export interface StylesPreviewParams {
  style: Pick<Style, 'css'>,
}

export interface StylesCreateParams {
  style: Pick<Style, 'css' | 'name' | 'owner_id' | 'owner_type'>,
}

export interface StylesUpdateParams {
  id: StyleId,
  style: Pick<Style, 'css' | 'name'>,
}

/**
 * Styles
 * @param methods
 */
export const styles = ({ get, post, patch }: RequestMethods) => {
  /**
   * Get a style by `StyleId`
   * @param params
   */
  const byId = ({ id }: Id<StyleId>): Promise<Style> => (
    get(`/styles/${id}`, {})
  );

  /**
   * Preview a style
   * @param params
   */
  const preview = (params: StylesPreviewParams): Promise<Style> => (
    post(`/styles/preview`, params)
  );

  /**
   * Create a style
   * @param params
   */
  const create = (params: StylesCreateParams): Promise<Style> => (
    post(`/styles`, params)
  );

  /**
   * Update a style
   * @param params
   */
  const update = ({ id, ...params }: StylesUpdateParams): Promise<Style> => (
    patch(`/styles/${id}`, params)
  );

  return {
    byId,
    preview,
    create,
    update,
  };
};
