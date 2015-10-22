var husl = require('husl');
var stylus = require('stylus');

module.exports = function () {

    // convert [0-1] (rgb) values to [0-255] (stylus) values
    function floatToInt(f) {
        return Math.round(f * 255);
    }

    return function (style) {
        style.define('husl', function (H, S, L, A) {
            var rgb = husl.toRGB(H.val, S.val, L.val);
            var r = floatToInt(rgb[0]);
            var g = floatToInt(rgb[1]);
            var b = floatToInt(rgb[2]);
            var a = (A !== undefined ? A.val : 1);
            return new stylus.nodes.RGBA(r, g, b, a);
        });
        style.define('huslp', function (H, S, L, A) {
            var rgb = husl.p.toRGB(H.val, S.val, L.val);
            var r = floatToInt(rgb[0]);
            var g = floatToInt(rgb[1]);
            var b = floatToInt(rgb[2]);
            var a = (A !== undefined ? A.val : 1);
            return new stylus.nodes.RGBA(r, g, b, a);
        });
    }
}
