import { RequestMethods } from '../apiProvider';
import { Person, PersonBasic, PersonId, PersonKind } from '../types';
import { Id } from './common';

export interface PeopleSearchParams {
  search?: string,
  kind?: PersonKind,
}

/**
 * People
 * @param methods
 */
export const people = ({ get }: RequestMethods) => {
  /**
   * Get a person by `PersonId`
   * @param params
   */
  const byId = ({ id }: Id<PersonId>): Promise<Person> => (
    get(`/people/${id}`, {})
  );

  /**
   * Search people
   * @param params
   */
  const search = (params: PeopleSearchParams): Promise<PersonBasic[]> => (
    get('/people', params)
  );

  return { byId, search };
};
