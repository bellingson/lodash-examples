var _ = require('lodash');

// _.forOwn iterates the key's and values of an object

var person = { id: 1, name: "Jim", age: 20, gender: 'm', enabled: true };

_.forOwn(person, function(value, key) {

    console.log(key + '->' + value);

});