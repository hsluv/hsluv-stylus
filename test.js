var assert = require('assert');
var stylus = require('stylus');
var husl = require('./husl');

var styl = ".someclass\n\
  color husl(0, 50, 0, 0.1)\n\
  color husl(60, 10, 10)\n\
  color huslp(40, 10, 20, 0.3)\n\
  color huslp(60, 10, 30)\n\
";

var css = ".someclass {\n\
  color: rgba(0,0,0,0.1);\n\
  color: #1d1b19;\n\
  color: rgba(50,48,47,0.3);\n\
  color: #484644;\n\
}\n";

if (require.main === module) {
    stylus(styl).use(husl()).render(function(err, test_css) {
        if (err) throw err;
        assert.equal(test_css, css);
        console.log('all good!');
    });
}