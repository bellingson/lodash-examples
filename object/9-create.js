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

function Employee() {}
Employee.prototype.greet = function() {
	console.log('Hello ' + this.name);
};

var employees = [];
_.each(people, function(item) {
	employees.push(_.create(Employee.prototype, item));
});

_.each(employees,function(e) { e.greet(); });


