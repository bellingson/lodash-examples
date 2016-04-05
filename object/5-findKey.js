var _ = require('lodash');

var object = { type: 'Circle' };

var key = _.findKey(object, function(val) { return val === 'Circle'}); 

console.log(key);

