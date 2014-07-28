assert = require 'assert'
husl = require '../husl.js'



describe 'Stylus integration', ->

  it 'should be able to work with Stylus programmatically', ->
    styl = """
    .someclass
      color husl(0, 50, 0, 0.1)
      color husl(60, 10, 10)
      color huslp(40, 10, 20, 0.3)
      color huslp(60, 10, 30)
    """
    css = """
    .someclass {
      color: rgba(0,0,0,0.1);
      color: #1d1b1a;
      color: rgba(50,48,47,0.3);
      color: #484644;
    }

    """
    stylus = require 'stylus'
    stylus(styl).use(husl()).render (err, test_css) ->
      throw err if err
      assert.equal css, test_css
