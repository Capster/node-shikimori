# node-shikimori

A Node.JS module, which provides an object oriented wrapper for the [Shikimori.org API](https://shikimori.org/api/doc/1.0).

Pull requests are always very welcome.

## Installation

```sh
$ npm install node-shikimori --save
```

## Example usage

```js
const options = {
  nickname: 'your nickname',
  password: 'your password' // or token: 'your token'
};

// Also can be called without any options (without autentification)
const shikimori = new Shikimori(options, (err, client) => {
  if (err) throw new Error(err);
  
  client.get('animes', {limit: 10}, (err, animes, response) => {
    let top10 = animes.map(anime => anime.name);
    console.log(top10);
  });
  
  client.post('messages/read_all', {type: 'news', frontend: false});
});
```