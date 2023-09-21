import { DEFAULT_USER_AGENT, TOKEN_PATH } from "./constants";
import { request } from "./limitedRequest";

export interface AccessToken {
  access_token: string,
  token_type: 'Bearer',
  expires_in: number,
  refresh_token: string,
  scope: string,
  created_at: number,
}

export interface AuthOptions {
  clientName?: string,
  clientId: string,
  clientSecret: string,
  redirectURI?: string,
}

export const auth = ({ clientName, clientId, clientSecret, redirectURI }: AuthOptions) => {
  const auth_request = (body: BodyInit) => request(TOKEN_PATH, {
    method: 'POST',
    headers: {
      'User-Agent': clientName ?? DEFAULT_USER_AGENT,
    },
    body,
  });

  const getAccessToken = (authCode: string): Promise<AccessToken> => {
    const body = new URLSearchParams({
      'grant_type': 'authorization_code',
      'client_id': clientId,
      'client_secret': clientSecret,
      'code': authCode,
      'redirect_uri': redirectURI ?? 'urn:ietf:wg:oauth:2.0:oob',
    });

    return auth_request(body);
  };

  const refreshAccessToken = (refreshToken: string): Promise<AccessToken> => {
    const body = new URLSearchParams({
      'grant_type': 'refresh_token',
      'client_id': clientId,
      'client_secret': clientSecret,
      'refresh_token': refreshToken,
    });

    return auth_request(body);
  };

  return { getAccessToken, refreshAccessToken };
};
