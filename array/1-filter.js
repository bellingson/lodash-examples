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

// find all matching items in a collection

var a = _.filter(people,{age: 30});
console.log(a);

var b = _.filter(people, function(p) { return p.age >= 30; });
console.log(b);

var men = _.filter(people, { gender: 'm' });

console.log(men);

var jim = _.filter(people, { name: 'Jim', enabled: true });
console.log(jim);





