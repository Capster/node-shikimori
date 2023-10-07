# Shikimori API Wrapper

A TypeScript library that provides a simple and easy-to-use wrapper for accessing the [Shikimori API](https://shikimori.me/api/doc). The library supports all endpoints and types of the Shikimori API and provides OAuth2 authorization functionality using an access token.

[![Build Status](https://img.shields.io/github/actions/workflow/status/Capster/node-shikimori/run-build.yml)](https://github.com/Capster/node-shikimori/actions/)
[![npm version](https://img.shields.io/npm/v/node-shikimori.svg)](https://www.npmjs.com/package/node-shikimori)
[![License](https://img.shields.io/github/license/capster/node-shikimori)](https://github.com/Capster/node-shikimori/LICENSE)
[![donate boosty](https://img.shields.io/badge/donate-boosty-blue.svg)](https://boosty.to/capster)

## Features

- **Support for all Shikimori API endpoints**: This library supports all endpoints (both v1 and v2) of the Shikimori API, including anime, manga, characters, users, and more.
- **Authorization support**: The library provides support for authorization using an access token.
- **Strong typing**: The library has types for all methods, making it easy to integrate with other TypeScript projects.
- **Zero dependencies**: This library has zero external dependencies, making it lightweight and easy to install.
- **Easy-to-use API**: The API wrapper is designed to be simple and easy to use, with intuitive methods and parameters that make it easy to get started quickly.

## Documentation
See the node-shikimori [API documentation](https://capster.github.io/node-shikimori) rendered with TypeDoc.

See the [official documentation](https://shikimori.me/api/doc) for the Shikimori API.

## Installation
#### npm
```sh
$ npm i --save node-shikimori
```
#### yarn
```sh
$ yarn add node-shikimori
```

## Usage
To use the library, simply import it into your project and create an instance of a `client`. You can then use the various methods provided by the `client` to access the Shikimori API.

```typescript
import { client } from 'node-shikimori';

const shikimori = client({});

const result = await shikimori.animes.byId({
    id: 1
});

console.log(result);
```

## Authorization
For more additional information see the [Official Shikimori OAuth2 Guide](https://shikimori.me/oauth).

1. **Register your [Shikimori Application](https://shikimori.me/oauth/applications):** This will provide you with a `client_id` and `client_secret` that you will need to use OAuth2.

2. **Redirect user to the Shikimori authorization endpoint:** This endpoint will prompt the user to grant your application access to their resources. After the user grants access, Shikimori will redirect them back to your application with an *authorization code*.
```
https://shikimori.me/oauth/authorize?client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&response_type=code&scope=
```

3. **Get an access token:** Your application will need to exchange an *authorization code* for an `AccessToken`. Shikimori will respond with an access token that your application can use to access the restricted resources/endpoints.
```ts
import { auth } from 'node-shikimori';

const { getAccessToken } = auth({
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_CLIENT_SECTET',
});

const accessToken = await getAccessToken('YOUR_AUTH_CODE');
```

4. **Use access token to access protected resources:** Finally, your application can use the access token to access the user's protected resources. Be sure to handle any errors or expired tokens gracefully.
```ts
const shikimori = client();
shikimori.setAccessToken(YOUR_ACCESS_TOKEN);

const currentUser = await shikimori.users.whoami();
console.log(currentUser)
```

5.**Refresh access token:** Access tokens have a limited lifespan of **1 day**, so your application will need to refresh them periodically to maintain access to the user's resources. To do this use a `refreshAccessToken` function with the refresh token. Shikimori will respond with a new access token and refresh token that your application can use to continue accessing the user's resources.
```ts
const newAccessToken = await refreshAccessToken('YOUR_REFRESH_TOKEN');
```

## Contribution
Contributions to this library are always welcome and highly encouraged.

## License
This library is licensed under MIT. Please see [LICENSE](https://github.com/Capster/node-shikimori/LICENSE) for licensing details.
