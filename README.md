[HUSL](http://www.boronine.com/husl/) is a perceptually-uniform alternative to HSL. Here is some [Stylus](http://learnboost.github.io/stylus/) code that generates 6 tiles with well-contrasting complementary colors:

```Stylus
tile(hue)
  background-color husl(hue, 90%, 80%)
  color husl(hue + 190deg, 90%, 10%)

for hue in 0deg 30deg 60deg 90deg 120deg 150deg
  .colored-tile-{hue}
    tile(hue)
```

# Usage

Install the plugin:

```Shell
npm install husl-stylus
```

To use from command line, run stylus like this:

```Shell
stylus -u husl-stylus < input.styl
```

To use programmatically, do this:

```JavaScript
var stylus = require('stylus');
var huslStylus = require('husl-stylus');

function renderWithHUSL(str) {
    return stylus(str).use(huslStylus()).render();
}
```

This module adds two following two Stylus functions that let you specify colors using HUSL and its pastel variant HUSLp:

**husl(H, S, L, [A])**

**huslp(H, S, L, [A])**

*H* represents hue as a number between 0 and 360, *S* represents saturation as a number between 0 and 100 and *L* represents lightness as a number between 0 and 100. *A* is an optional value between 0 and 1 representing the alpha channel.

# License

Copyright (C) 2014 Alexei Boronine

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
