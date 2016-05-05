var _ = require('lodash');

// _.extend && _.assign assign properties from source object to the destination, overwriting any existing properties
// _.extend will also include inherited properties from it's prototype


var people = [
	{ id: 1, name: "Jim", age: 20, gender: 'm', enabled: true },
	{ id: 2, name: "Bob", age: 34, gender: 'm', enabled: true },
	{ id: 4, name: "Nancy", age: 42, gender: 'f', enabled: true },
];


var p2 = _.map(people,function(p) {
	return _.extend({ yearsOfExperience: p.age - 20 }, p);
});

console.log(p2);
