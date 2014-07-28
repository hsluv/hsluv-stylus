var husl = require('husl');
var stylus = require('stylus');

module.exports = function() {
	return function(style) {
	    style.define('husl', function (H, S, L, A) {
		    var rgb = husl._rgbPrepare(husl._conv.husl.rgb([H.val, S.val, L.val]));
		    var a = (A !== undefined ? A.val : 1);
		    return new stylus.nodes.RGBA(rgb[0], rgb[1], rgb[2], a);
	    });
	    style.define('huslp', function (H, S, L, A) {
		    var rgb = husl._rgbPrepare(husl._conv.huslp.rgb([H.val, S.val, L.val]));
		    var a = (A !== undefined ? A.val : 1);
		    return new stylus.nodes.RGBA(rgb[0], rgb[1], rgb[2], a);
	    });
	}
}
