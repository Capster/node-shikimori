import { ParsedUrlQueryInput } from 'querystring';
import { ClientOptions, apiProvider, AccessToken } from './apiProvider';
import { ClubConstants, ContentConstants, Smiley, UserRateConstants } from './types/constants';
import * as types from './types/';

const test: types.UserBasic = {
  id: 1,
}

// TODO: Class

export const shikimoriClient = (options: ClientOptions) => {
  const client = apiProvider(options);

  return {
    setAccessToken: (token: AccessToken) => client.setAccessToken(token),
    get: (endpoint: string, params: ParsedUrlQueryInput) => client.get(endpoint, params),
    post: (endpoint: string, params: ParsedUrlQueryInput) => client.post(endpoint, params),

    constants: {
      anime: () => client.get("/constants/anime", {}) as Promise<ContentConstants>,
      manga: () => client.get("/constants/manga", {}) as Promise<ContentConstants>,
      userRate: () => client.get("/constants/user_rate", {}) as Promise<UserRateConstants>,
      club: () => client.get("/constants/manga", {}) as Promise<ClubConstants>,
      smileys: () => client.get("/constants/smileys", {}) as Promise<Smiley[]>,
    },
  }
}
