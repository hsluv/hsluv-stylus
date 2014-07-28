Install the plugin:

```Shell
npm install husl-stylus
```

To use from command line, run stylus like this:

```Shell
stylus < input.styl > output.css -u husl-stylus
```

To use programmatically, do this:

```JavaScript
var connect = require('connect')
  , stylus = require('stylus')
  , husl = require('husl-stylus');

var server = connect();

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .use(husl());
}

server.use(stylus.middleware({
    src: __dirname
  , compile: compile
}));
```

Now you can use HUSL in your stylesheets!

```Stylus
.tinted(hue)
    background-color husl(hue, 90, 80)
    color husl(hue, 90, 10)
```
