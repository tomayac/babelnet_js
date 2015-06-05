# BabelNet.js

A simple JavaScript wrapper for [BabelNet™](http://babelnet.org/).

# Installation

```bash
$ npm install babelnet
```

# Usage in Node.js

```javascript
var BabelNet = require('./babelnet.js');

BabelNet.getSynsetIds({
  word: 'apple',
  language: 'EN'
}, function(err, results) {
  if (err) {
    throw(err);
  }
  console.log(JSON.stringify(results));
});
```
# Usage in the browser

First, bundle all dependencies into one file with [browserify](http://browserify.org/).
Make sure to create a ```.env``` file with your [API key](http://babelnet.org/register) before.
You can simply rename and modify the file ```.env.example``` from the repo.

```bash
$ npm run browserify
````

Second, you can use the created file in the browser as follows.

```html
<script src="babelnet_browser.min.js"></script>

<script>
  BabelNet.getSynsetIds({
    word: 'apple',
    language: 'EN'
  }, function(err, results) {
    if (err) {
      throw(err);
    }
    console.log(JSON.stringify(results));
  });
</script>
```

# API

The API is modeled along the [BabelNet HTTP API](http://babelnet.org/guide) and offers the following methods:

```
getSynsetIds
getSynset
getSenses
getSynsetIdsFromWikipediaTitle
getEdges
```

See [examples.js](https://github.com/tomayac/babelnet_js/blob/master/examples.js) for a full overview.
You can run the examples from Node.js via ```$ node examples.js``` or from the browser by opening
```index.html``` (check the console for the output).

# License
Copyright 2015 Thomas Steiner (tomac@google.com)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
