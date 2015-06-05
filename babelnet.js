'use strict';

var request = require('request');
var fs = require('fs');
var env = fs.readFileSync(__dirname + '/.env', 'utf-8');
if (env) {
  var lines = env.split('\n');
  lines.forEach(function(line) {
    var key = line.split('=')[0];
    var value = line.split('=')[1];
    if (key === 'KEY') {
      process.env[key] = decodeURIComponent(value);
    }
  });
}

var BabelNet = {
  KEY: encodeURIComponent(process.env.KEY),
  START_POINT: 'https://babelnet.io/v1/',

  getSynsetIds: function(opts, callback) {
    var options = {
      json: true,
      withCredentials: false,
      url: BabelNet.START_POINT + 'getSynsetIds' +
          '?word=' + encodeURIComponent(opts.word) +
          '&lang=' + encodeURIComponent(opts.language) +
          (opts.pos ? '&pos=' + encodeURIComponent(opts.pos) : '') +
          (opts.source ? '&source=' + encodeURIComponent(opts.source) : '') +
          '&key=' + BabelNet.KEY
    };
    request.get(options, function(err, response, body) {
      if (err || response.statusCode !== 200) {
        return callback(err || JSON.stringify(body));
      }
      return callback(null, body);
    });
  },

  getSynset: function(opts, callback) {
    var options = {
      json: true,
      withCredentials: false,
      url: BabelNet.START_POINT + 'getSynset' +
          '?id=' + encodeURIComponent(opts.synsetId) +
          '&key=' + BabelNet.KEY
    };
    request.get(options, function(err, response, body) {
      if (err || response.statusCode !== 200) {
        return callback(err || JSON.stringify(body));
      }
      return callback(null, body);
    });
  },

  getSenses: function(opts, callback) {
    var options = {
      json: true,
      withCredentials: false,
      url: BabelNet.START_POINT + 'getSenses' +
          '?word=' + encodeURIComponent(opts.word) +
          '&lang=' + encodeURIComponent(opts.language) +
          (opts.pos ? '&pos=' + encodeURIComponent(opts.pos) : '') +
          (opts.source ? '&source=' + encodeURIComponent(opts.source) : '') +
          '&key=' + BabelNet.KEY
    };
    request.get(options, function(err, response, body) {
      if (err || response.statusCode !== 200) {
        return callback(err || JSON.stringify(body));
      }
      return callback(null, body);
    });
  },

  getSynsetIdsFromWikipediaTitle: function(opts, callback) {
    var options = {
      json: true,
      withCredentials: false,
      url: BabelNet.START_POINT + 'getSynsetIdsFromWikipediaTitle' +
          '?word=' + encodeURIComponent(opts.word) +
          '&lang=' + encodeURIComponent(opts.language) +
          '&pos=' + encodeURIComponent(opts.pos) +
          '&key=' + BabelNet.KEY
    };
    request.get(options, function(err, response, body) {
      if (err || response.statusCode !== 200) {
        return callback(err || JSON.stringify(body));
      }
      return callback(null, body);
    });
  },

  getEdges: function(opts, callback) {
    var options = {
      json: true,
      withCredentials: false,
      url: BabelNet.START_POINT + 'getEdges' +
          '?id=' + encodeURIComponent(opts.synsetId) +
          '&key=' + BabelNet.KEY
    };
    request.get(options, function(err, response, body) {
      if (err || response.statusCode !== 200) {
        return callback(err || JSON.stringify(body));
      }
      return callback(null, body);
    });
  }
};

module.exports = BabelNet;
