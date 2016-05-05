var _ = require('lodash');

// _.bind creates a function with the this binding applied to the target

// the lodash implementation performs better because it's able to optimize better than the native methods

function describe() {
	console.log('I am ' + this.name);
}

var describePerson = _.bind(describe,{name: 'John'});

var describePlace = _.bind(describe,{name: 'Chicago'});

describePerson();

describePlace();

