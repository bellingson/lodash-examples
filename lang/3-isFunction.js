
var _ = require('lodash');

var foo = function() {};

console.log(foo);

var bar = function() {};
console.log(bar);

console.log(_.isFunction(bar));

