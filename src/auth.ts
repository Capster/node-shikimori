import { Token } from "./apiProvider";
import { DEFAULT_USER_AGENT, TOKEN_PATH } from "./constants";
import { request } from "./limitedRequest";

/** Access Token which represents the access token received from an OAuth2 authentication request */
export interface AccessToken {
  /** The access token string as issued by the authorization server */
  access_token: Token;
  /** A string representing the token type, which is always `"Bearer"` for OAuth2 */
  token_type: "Bearer";
  /** If the access token expires, the server should reply with the duration of time the access token is granted for */
  expires_in: number;
  /** Used by clients to exchange a refresh token for an access token when the access token has expired */
  refresh_token: string;
  /** A string representing the scope of the access token */
  scope: string;
  /** A number representing the timestamp at which the access token was created */
  created_at: number;
}

/** Represents a set of options required for authenticating a client */
export interface AuthOptions {
  /** An optional string representing the name of the client (defaults to `node-shikimori`) */
  clientName?: string;
  /** A mandatory string representing the unique identifier of the client */
  clientId: string;
  /** The secret key for authentication */
  clientSecret: string;
  /** An optional string representing the URI to redirect to upon completion of authentication */
  redirectURI?: string;
}

/**
 * OAuth2-based authorization layer
 * @param options - Represents a set of options required for authenticating a client
 * @see [OAuth2 Guide](https://shikimori.me/oauth)
 */
export const auth = ({
  clientName,
  clientId,
  clientSecret,
  redirectURI,
}: AuthOptions) => {
  const authRequest = (body: BodyInit) =>
    request(TOKEN_PATH, {
      method: "POST",
      headers: {
        "User-Agent": clientName ?? DEFAULT_USER_AGENT,
      },
      body,
    });

  /**
   * Retrieves an access token from an OAuth2 authentication request using the provided authorization code
   * @param authCode - A string representing the authorization code received from the OAuth2 authentication request
   * @return A Promise that resolves with an AccessToken object representing the retrieved access token
   */
  const getAccessToken = (authCode: string): Promise<AccessToken> => {
    const body = new URLSearchParams({
      grant_type: "authorization_code",
      client_id: clientId,
      client_secret: clientSecret,
      code: authCode,
      redirect_uri: redirectURI ?? "urn:ietf:wg:oauth:2.0:oob",
    });

    return authRequest(body);
  };

  /**
   * Retrieves a new access token from an OAuth2 authentication request using the provided refresh token
   * @param refreshToken - A string representing the refresh token received from a previous OAuth2 authentication request
   * @return A Promise that resolves with an AccessToken object representing the retrieved access token
   */
  const refreshAccessToken = (refreshToken: string): Promise<AccessToken> => {
    const body = new URLSearchParams({
      grant_type: "refresh_token",
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
    });

    return authRequest(body);
  };

  return { getAccessToken, refreshAccessToken };
};
