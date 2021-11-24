var request = require('request'),
  querystring = require('querystring');

var baseUrl = 'https://shikimori.one/api/';

var Shikimori = function(options, callback) {
  if (!(this instanceof Shikimori)) {
    return new Shikimori(options, callback);
  }
  if (typeof options === 'function') {
    callback = options;
  }
  if (options.nickname === undefined) {
    callback(null, this);
  } else {
    this.nickname = options.nickname;
    if (options.password !== undefined) {
      var self = this;
      this.requestToken(this.nickname, options.password, function(err, token) {
        if (typeof callback === 'function') {
          callback(err, self);
        }
      });
    } else if (options.token !== undefined) {
      this.setToken(options.token);
      if (typeof callback === 'function') {
        callback(null, this);
      }
    } else {
      callback('Password/Token is required');
    }
  }
  return this;
}

Shikimori.prototype.request = function(method, path, params, callback) {
  callback = callback || function() {}

  var url = baseUrl + path;
  if (typeof params === 'function') {
    callback = params;
  } else if (method === 'get') {
    url += '?' + querystring.stringify(params);
  }
  var options = {
    url: url,
    method: method.toUpperCase(),
    headers: {
      'X-User-Nickname': this.nickname,
      'X-User-Api-Access-Token': this.token,
      'User-Agent': 'node-shikimori',
    }
  };
  if (method !== 'get' && params !== undefined) {
    options.body = JSON.stringify(params);
    options.headers['Content-Type'] = 'application/json';
  }
  request(options, function(err, response, data) {
    if (err) {
      callback(err);
    } else {
      try {
        var parsedData = JSON.parse(data);
      } catch (e) {
        callback(e, data, response);
      }
      callback(null, parsedData, response);
    }
  });
}

Shikimori.prototype.get = function(path, params, callback) {
  return this.request('get', path, params, callback);
}

Shikimori.prototype.post = function(path, params, callback) {
  return this.request('post', path, params, callback);
}

Shikimori.prototype.patch = function(path, params, callback) {
  return this.request('post', path, params, callback);
}

Shikimori.prototype.put = function(path, params, callback) {
  return this.request('post', path, params, callback);
}

Shikimori.prototype.delete = function(path, callback) {
  return this.request('delete', path, undefined, callback);
}

Shikimori.prototype.setToken = function(token) {
  this.token = token;
}

Shikimori.prototype.requestToken = function(nickname, password, callback) {
  var self = this;
  this.get('access_token', {nickname: nickname, password: password}, function(err, data, response) {
    var token = data.api_access_token;
    if (err) {
      callback(err);
    } else if (token === null || token === undefined) {
      callback('Invalid login or password');
    } else {
      var token = data.api_access_token;
      self.setToken(token);
      callback(null, token);
    }
  });
}

exports.Shikimori = Shikimori;
