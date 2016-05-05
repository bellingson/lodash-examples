
var _ = require('lodash');

// test object type

// true
console.log(_.isObject([ 1 ]));

console.log(_.isObject({}));

// false
console.log(_.isObject(1));

console.log(_.isObject(null));

console.log(_.isObject(undefined));