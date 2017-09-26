var flow = require('lodash/fp/flow');
var filter = require('lodash/fp/filter');
var sortBy = require('lodash/fp/sortBy');
var reverse = require('lodash/fp/reverse');

var people = [
	{ id: 1, name: "Jim", age: 20, gender: 'm', enabled: false },	
	{ id: 1, name: "Jim", age: 20, gender: 'm', enabled: true },
	{ id: 2, name: "Lucy", age: 42, gender: 'f', enabled: true },	
	{ id: 3, name: "Wanda", age: 30, gender: 'f', enabled: true },
	{ id: 4, name: "Deborah", age: 60, gender: 'f', enabled: true },		
	{ id: 5, name: "Bob", age: 34, gender: 'm', enabled: false },
	{ id: 6, name: "Steve", age: 30, gender: 'm', enabled: true },
	{ id: 7, name: "Nancy", age: 42, gender: 'f', enabled: true },
	{ id: 8, name: "Frank", age: 30, gender: 'm', enabled: true },
	{ id: 9, name: "Larry", age: 68, gender: 'm', enabled: true },
	{ id: 10, name: "Betty", age: 71, gender: 'f', enabled: true },
];

var r = flow(
			filter(p => p.age >=30),
			sortBy('age'),
			reverse
			)(people);

console.log(r);
