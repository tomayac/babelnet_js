'use strict';

var BabelNet = require('./babelnet.js');

BabelNet.getSynsetIds({
  word: 'apple',
  language: 'EN'
}, function(err, results) {
  if (err) {
    throw(err);
  }
  console.log(results);
});

BabelNet.getSynset({
  synsetId: 'bn:14792761n'
}, function(err, results) {
  if (err) {
    throw(err);
  }
  console.log(results);
});

BabelNet.getSenses({
  word: 'BabelNet',
  language: 'EN'
}, function(err, results) {
  if (err) {
    throw(err);
  }
  console.log(results);
});

BabelNet.getSynsetIdsFromWikipediaTitle({
  word: 'BabelNet',
  language: 'EN',
  pos: 'NOUN'
}, function(err, results) {
  if (err) {
    throw(err);
  }
  console.log(results);
});

BabelNet.getEdges({
  synsetId: 'bn:03083790n'
}, function(err, results) {
  if (err) {
    throw(err);
  }
  console.log(results);
});
