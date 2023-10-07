import { Id } from './common';
import { RequestMethods } from '../apiProvider';
import { Dialog, Message, DialogId, Notice } from '../types';

/**
 * Dialogs
 * @param methods
 */
export const dialogs = ({ get, _delete }: RequestMethods) => {
  /**
   * List dialogs
   *
   * Requires `messages` oauth scope
   * @param params
   */
  const list = (): Promise<Dialog[]> => get('/dialogs', {});

  /**
   * List messages from a certain dialog
   *
   * Requires `messages` oauth scope
   * @param params
   */
  const byId = ({ id }: Id<DialogId>): Promise<Message[]> => get(`/dialogs/${id}`, {});

  /**
   * Delete a dialog
   *
   * Requires `messages` oauth scope
   * @param params
   */
  const destroy = ({ id }: Id<DialogId>): Promise<Notice> => _delete(`/dialogs/${id}`, {});

  return {
    list,
    byId,
    destroy,
  };
};
