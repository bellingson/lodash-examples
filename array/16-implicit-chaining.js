var _ = require('lodash');

var people = [
	{ id: 1, name: "Jim", age: 20, gender: 'm', enabled: true },
	{ id: 1, name: "Jim", age: 20, gender: 'm', enabled: false },	
	{ id: 2, name: "Bob", age: 34, gender: 'm', enabled: true },
	{ id: 3, name: "Steve", age: 30, gender: 'm', enabled: true },
	{ id: 4, name: "Nancy", age: 42, gender: 'f', enabled: true },
	{ id: 5, name: "Frank", age: 30, gender: 'm', enabled: true },
	{ id: 6, name: "Larry", age: 68, gender: 'm', enabled: true }
];

// Implicit Chaining : Chainable functions return wrapped values, must call 'value()' to get the result

var r = _(people)
			.filter({enabled: true})
			.filter({gender: 'm'})
			.map('id')
			.value();

console.log(r);	


// Implicit Chaining : Non-chainable functions return primitive values		

r = _(people)
			.filter({enabled: true})
			.filter({gender: 'm'})
			.first();

console.log(r);		

// Chaining can wrap plain objects and strings 

var i = _(r)
			.extend({something: true})
			.extend({another: 12})
			.value();


console.log(i);






