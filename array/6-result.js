var _ = require('lodash');


// _.result will get a value from an object.  If the value is a function it will be invoked

var object = {

	name: 'Bob',
	description: function() {
		return 'Hello ' + this.name;
	}
}

console.log(_.result(object,'description'));

// example of _.result with a default value

// object.description = undefined;
// console.log(_.result(object,'description', 'Hello there'));

