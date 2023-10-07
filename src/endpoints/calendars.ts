import { RequestMethods } from '../apiProvider';
import { Episode } from '../types';

/** @interface */
export type CalendarParams = Record<'censored', boolean>;

/**
 * Calendars
 * @param methods
 */
export const calendars = ({ get }: RequestMethods) => {
  /**
   * List all recent events from a calendar
   * @param params
   */
  const list = (params: CalendarParams): Promise<Episode[]> => (
    get('/calendar', params)
  );

  return { list };
};
