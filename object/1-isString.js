var _ = require('lodash');

// DETERMINING OBJECT TYPE
// there are nuances to JavaScript's esoteric type system

// when using == operator, second object might be coerced into a compatible representation with the first object
console.log(true == 1);

// favor strict equality === over ==
console.log(true === 1);


// type checking with lodash

console.log(_.isString(1));

console.log(_.isString('hello'));


