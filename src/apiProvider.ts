import { limitedRequest } from './limitedRequest';
import {
  DEFAULT_USER_AGENT,
  MAX_CALLS_PER_MINUTE,
  MAX_CALLS_PER_SECOND,
} from './constants';

/** Options for configuring a Shikimori wrapper */
export interface ClientOptions {
  /** An optional `Token` representing an existing access token to use for authentication */
  token?: Token,
  /**
   * Represents a user agent used to send requests
   * @defaultValue 'node-shikimori'
   */
  clientName: string,
  /**
   * A number representing the maximum number of API calls allowed per second
   * @defaultValue 5
   */
  maxCallsPerSecond: number,
  /**
   * A number representing the maximum number of API calls allowed per minute
   * @defaultValue 90
   */
  maxCallsPerMinute: number,
}

/**
 * Represents an OAuth2 access token, which is a string value that grants access to protected resources.
 * If undefined, the client does not have an access token.
 */
export type Token = string | undefined;

/** @interface */
export type RequestMethods = Record<'get' | 'post' | 'patch' | '_delete', HTTPMethod>;
type HTTPMethod = (...args: [path: string, params: any]) => Promise<any>;

interface Params {
  [key: string]: string;
}

export type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
export type RequestHandler = (method: RequestMethod, path: string, params: Params) => Promise<any>;

export const httpMethods = (request: RequestHandler): RequestMethods => ({
  get: request.bind(null, 'GET'),
  post: request.bind(null, 'POST'),
  patch: request.bind(null, 'PATCH'),
  _delete: request.bind(null, 'DELETE'),
});

export const apiProvider = (options: ClientOptions = {
  clientName: DEFAULT_USER_AGENT,
  maxCallsPerSecond: MAX_CALLS_PER_SECOND,
  maxCallsPerMinute: MAX_CALLS_PER_MINUTE,
}): [RequestHandler, (token: Token) => void] => {
  const request = limitedRequest(options.maxCallsPerSecond, options.maxCallsPerMinute);
  let accessToken: Token = options.token;

  const apiRequest: RequestHandler = async (type, endpoint, params): Promise<any> => {
    const searchParams = new URLSearchParams(Object.entries(params));
    const fullPath = `/api${endpoint}?${searchParams.toString()}`;

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

  const setAccessToken = (token: Token) => {
    accessToken = token;
  };

  return [apiRequest, setAccessToken];
};
