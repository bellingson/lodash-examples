var _ = require('lodash');

// _.functions return an array of an object's function property names

var object = {

	f1: function() {  return 'fn1'; },
	f2: function() { return 'f2'; }
}

console.log(_.functions(object));

