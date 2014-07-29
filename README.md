# Usage

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

# License

Copyright (C) 2014 Alexei Boronine

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
