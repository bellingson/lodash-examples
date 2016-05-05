var _ = require('lodash');

// _.clone() will create a deep copy of an object allowing us to break the reference 
// to the original and then manipulate it without touching the source.
// use judiciously

var complexObject = {
	firstName: 'Bob',
	lastName: 'Smith',
	addresses: [
		{ address1: '123 Main St',
		  city: 'Chicago',
		  state: 'IL',
		  zip: '60614'
		},
		{ address1: '123 Elm St',
		  city: 'Chicago',
		  state: 'IL',
		  zip: '60614'
		}
  	  
	],
	greet: function() { return 'Hello ' + this.firstName; }
};


var objectCopy = _.clone(complexObject);

console.log(objectCopy);
