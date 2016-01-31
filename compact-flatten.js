var _ = require('lodash');

// get an array with any non truthy values removed
var values = [0, null, 1, false, undefined, 2, 3, 4];

var truthy = _.compact(values);
console.log(truthy);


// get an array of the values, changing any subarrays to flattend values
var values2 = [ 1, 3, 4, [ 6, 8, 9]];

var v2 = _.flatten(values2);
console.log(v2);

