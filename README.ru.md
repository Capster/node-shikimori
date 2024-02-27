# Обертка над Shikimori API

Библиотека TypeScript, предоставляющая простую и удобную оболочку для доступа к [Shikimori API](https://shikimori.me/api/doc). Библиотека поддерживает все эндпоинты и типы Shikimori API, а также предоставляет функциональность по OAuth2-авторизации с использованием access-токена.

[![Build Status](https://img.shields.io/github/actions/workflow/status/Capster/node-shikimori/run-build.yml)](https://github.com/Capster/node-shikimori/actions/)
[![npm version](https://img.shields.io/npm/v/node-shikimori.svg)](https://www.npmjs.com/package/node-shikimori)
[![License](https://img.shields.io/github/license/capster/node-shikimori)](https://github.com/Capster/node-shikimori/LICENSE)
[![donate boosty](https://img.shields.io/badge/donate-boosty-blue.svg)](https://boosty.to/capster)

## Особенности

- **Поддержка всех эндпоинтов Shikimori API**: Данная библиотека поддерживает все эндпоинты (v1 и v2) Shikimori API, включая доступ к базе с аниме, мангой, персонажами, пользователями и другими ресурсами.
- **Поддержка авторизации**: Библиотека обеспечивает поддержку авторизации с использованием access-токена.
- **Строгая типизация**: Все методы библиотеки типизированы, что упрощает интеграцию с другими проектами, использующими Typescript.
- **Отсутствие зависимостей**: Эта библиотека не имеет внешних зависимостей, что делает её легковесной и простой для установки.
- **Простое в использовании API**: Обертка над API разработана таким образом, чтобы быть простой и удобной в использовании, с интуитивно понятными методами и параметрами, которые позволяют работать с API "из коробки".

## Документация
Смотрите [документацию библиотеки](https://capster.github.io/node-shikimori) сгенерированную с помощью TypeDoc.

Смотрите [официальную документацию](https://shikimori.me/api/doc) для Shikimori API.

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
Чтобы использовать библиотеку, просто импортируйте её в свой проект и создайте экземпляр `client`. После этого вы сможете использовать различные методы, предоставляемые `client` для доступа к Shikimori API.

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

1. **Зарегистрируйте ваше [приложение Шикимори](https://shikimori.me/oauth/applications):** После регистрации вам будут выданы `client_id` и `client_secret` которые понадобятся для использования OAuth2.

2. **Перенаправьте пользователя на эндпоинт авторизации в Шикимори:** Этот эндпоинт предложит ему предоставить вашему приложению доступ к своим данным. После того, как пользователь предоставит доступ, Шикимори перенаправит его обратно в ваше приложение с *кодом авторизации*.
```
https://shikimori.me/oauth/authorize?client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&response_type=code&scope=
```

3. **Получите токен доступа:** Вашему приложению потребуется обменять *код авторизации* на `AccessToken`. Шикимори вернет вам персональный токен доступа, который ваше приложение может использовать для доступа к ограниченным ресурсам/эндпоинтам.
```ts
import { auth } from 'node-shikimori';

const { getAccessToken } = auth({
    clientId: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECTET',
});

const accessToken = await getAccessToken('YOUR_AUTH_CODE');
```

4. **Используйте `AccessToken` для доступа к защищенным ресурсам:** Теперь ваше приложение может использовать `AccessToken` для доступа к защищенным ресурсам пользователя. Обязательно корректно обрабатывайте любые ошибки, а также токены с истекшим сроком действия.
```ts
const shikimori = client();
shikimori.setAccessToken(YOUR_ACCESS_TOKEN);

const currentUser = await shikimori.users.whoami();
console.log(currentUser)
```

5.**Обновление токена доступа:** Токены доступа имеют ограниченный срок действия в **1 день**, поэтому вашему приложению потребуется периодически обновлять их, чтобы поддерживать доступ пользователя к ресурсам. Для этого используйте функцию `refreshAccessToken` с refresh-токеном в качестве параметра. Шикимори вернет новый токен доступа и токен обновления, которые ваше приложение может использовать для продолжения предоставления доступа к защищенным ресурсам.
```ts
const newAccessToken = await refreshAccessToken('YOUR_REFRESH_TOKEN');
```

## Соавторство
Вклад в библиотеку всегда приветствуется и поощряется. Для этого откройте Issue с описанием проблемы или Pull Request с необходимыми изменениями

## Лицензия
Данная библиотека распространяется по лицензии MIT. Подробнее можно ознакомиться в [LICENSE](https://github.com/Capster/node-shikimori/LICENSE).
