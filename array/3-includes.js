var _ = require('lodash');

var names = [ 'Steve', 'Bob', 'Earl', 'Joe', 'Frank'];

// test names to see if it contains Steve and John

console.log(_.includes(names,'Steve'));
console.log(_.includes(names,'John'));

// is there another steve
console.log(_.includes(names,'Steve',1));



