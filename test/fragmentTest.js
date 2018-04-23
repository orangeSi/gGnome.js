var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;


const Base = require('../js/base.js').Base;
const Fragment = require('../js/fragment.js').Fragment;

// should I make id via Misc.guid a predictable number via random seed?
// what is this.brush = brush;?

// constructor 

describe('testing fragment.js', function() {
  it('Fragment constructor', function() {
    var fragment = new Fragment();         // default
    assert.equal(fragment.brush, undefined);  
    assert.equal(fragment.selection, null);  
    assert.equal(fragment.domain, null);
    assert.equal(fragment.range, null);  
    assert.equal(fragment.panelWidth, null);  
  });
});

// toString()

// /Users/ebiederstedt/gGnome.js/js/fragment.js:19
//      selection: [${this.selection.join(',')}], 
// 
// TypeError: Cannot read property 'join' of null

