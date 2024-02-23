# Оболочка Шикимори API

Библиотека TypeScript, предоставляющая простую и удобную оболочку для доступа к Шикимори API. Библиотека поддерживает все эндпоинты и типы API Шикимори, а также предоставляет функциональность авторизации OAuth2 с использованием токена доступа.

[![Build Status](https://img.shields.io/github/actions/workflow/status/Capster/node-shikimori/run-build.yml)](https://github.com/Capster/node-shikimori/actions/)
[![npm version](https://img.shields.io/npm/v/node-shikimori.svg)](https://www.npmjs.com/package/node-shikimori)
[![License](https://img.shields.io/github/license/capster/node-shikimori)](https://github.com/Capster/node-shikimori/LICENSE)
[![donate boosty](https://img.shields.io/badge/donate-boosty-blue.svg)](https://boosty.to/capster)

## Особенности

- **Поддержка всех эндпоинтов Шикимори API**: Эта библиотека поддерживает все эндпоинты (включая v1 и v2) Шикимори API, включая аниме, мангу, персонажей, пользователей и многое другое.
- **Поддежка авторизации**: Библиотека обеспечивает поддержку авторизации с использованием токена доступа.
- **Строгая типизация**: В библиотеке все методы типизированы, что упрощает интеграцию с другими проектами, использующими Typescript.
- **Отсутствие зависимостей**: Эта библиотека не имеет внешних зависимостей, что делает её легковесной и простой для установки.
- **Простое в использовании API**: Оболочка API разработана так, чтобы быть простой и удобной в использовании, с интуитивно понятными методами и параметрами, которые позволяют легко и быстро приступить к работе.

## Документация
Посмотреть node-shikimori [документацию API](https://capster.github.io/node-shikimori) сгенерированную с помощью TypeDoc.

Посмотреть [официальную документацию](https://shikimori.me/api/doc) для Шикимори API.

## Установка
#### npm
```sh
$ npm i --save node-shikimori
```
#### yarn
```sh
$ yarn add node-shikimori
```

## Использование
Чтобы использовать библиотеку, просто импортируйте её в свой проект и создайте экземпляр `client`. Затем вы можете использовать различные методы, предостовляемые `client` для доступа к Шикимори API.

```typescript
import { client } from 'node-shikimori';

const shikimori = client();

const result = await shikimori.animes.byId({
    id: 1
});

console.log(result);
```

## Авторизация
Более подробную информацию можно посмотреть в [Official Shikimori OAuth2 Guide](https://shikimori.me/oauth).

1. **Зарегистрируйте ваше [приложение Шикимори ](https://shikimori.me/oauth/applications):** Это предоставит вам `client_id` и `client_secret` которые вам понадобятся для использования OAuth2.

2. **Редирект пользователя на эндпоинт авторизации в Шикимори:** Этот эндпоинт предложит пользователю предоставить вашему приложению доступ к своим ресурсам. После того, как пользователь предоставит доступ, Шикимори перенаправит его обратно в ваше приложение с *кодом авторизации*.
```
https://shikimori.me/oauth/authorize?client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&response_type=code&scope=
```

3. **Получить токен доступа:** Вашему приложению потребуется обменять *код авторизации* на `AccessToken`. Шикимори вернет вам токен доступа, который ваше приложение можно использовать для доступа к ограниченным ресурсам/эндпоинтам.
```ts
import { auth } from 'node-shikimori';

const { getAccessToken } = auth({
    clientId: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECTET',
});

const accessToken = await getAccessToken('YOUR_AUTH_CODE');
```

4. **Использование токена доступа для доступа к защищенным ресурсам:** В заключении, ваше приложение может использовать токен доступа для доступа к защищенным ресурсам пользователя. Обязательно корректно обрабатывайте любые ошибки или токены с истекшим сроком действия.
```ts
const shikimori = client();
shikimori.setAccessToken(YOUR_ACCESS_TOKEN);

const currentUser = await shikimori.users.whoami();
console.log(currentUser)
```

5.**Обновление токена доступа:** Токены доступа имеют ограниченный срок действия **1 день**, поэтому вашему приложению потребуется периодически обновлять их, чтобы поддерживать доступ к ресурсам пользователя. Для этого используйте функцию `refreshAccessToken` с токеном обновления в качестве параметра. Шикимори вернет новый токен доступа и токен обновления, которые ваше приложение может использовать для продолжения доступа к ресурсам пользователя.
```ts
const newAccessToken = await refreshAccessToken('YOUR_REFRESH_TOKEN');
```

## Соавторство
Вклад в библиотеку всегда приветствуется и поощряется.

## Лицензия
Эта библиотека лицензирована по MIT. Детальнее можно ознакомиться в [LICENSE](https://github.com/Capster/node-shikimori/LICENSE).
