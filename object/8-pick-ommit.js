var _ = require('lodash');

// _.pick will create an object containing select properties 
// _.omit will create on object with select properties removed

var person = {
	name: 'Bob',
	age: 32, 
	ssn: '555-55-5555',
	password: '123456'
};

var someInfo = _.pick(person, ['name', 'age']);

console.log(someInfo);

var someInfo2 = _.omit(person,['ssn', 'password']);

console.log(someInfo2);