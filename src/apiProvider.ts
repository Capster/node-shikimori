import querystring, { ParsedUrlQueryInput } from 'querystring';
import path from 'path';

import { limitedRequest } from './limitedRequest';
import {
  DEFAULT_USER_AGENT,
  MAX_CALLS_PER_MINUTE,
  MAX_CALLS_PER_SECOND,
} from './constants';

export interface ClientOptions {
  token?: AccessToken,
  tokenType?: string,
  clientName: string,
  maxCallsPerSecond: number,
  maxCallsPerMinute: number,
}

export type AccessToken = string | undefined;

export const apiProvider = (options: ClientOptions = {
  clientName: DEFAULT_USER_AGENT,
  maxCallsPerSecond: MAX_CALLS_PER_SECOND,
  maxCallsPerMinute: MAX_CALLS_PER_MINUTE,
}) => {
  const request = limitedRequest(options.maxCallsPerSecond, options.maxCallsPerMinute);

  let accessToken: AccessToken  = options.token;

  const apiRequest = async (type: string, endpoint: string, params: ParsedUrlQueryInput) => {
    let fullPath = path.join('/api', endpoint);
    if (params !== undefined) {
      fullPath += '?' + querystring.stringify(params);
    }

    const headers = new Headers({
      'User-Agent': options.clientName,
    });

    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }

    return request(fullPath, {
      method: type,
      headers: headers,
    });
  };

  const setAccessToken = (token: AccessToken) => {
    accessToken = token;
  }

  const createMethod = (name: string) => (method: string, params: ParsedUrlQueryInput) => (
    apiRequest(name, method, params)
  );

  return {
    setAccessToken,
    get: createMethod("GET"),
    post: createMethod("POST"),
    patch: createMethod("PATCH"),
    put: createMethod("PUT"),
    delete: createMethod("DELETE"),
  };
};
