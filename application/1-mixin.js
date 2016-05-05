
var _ = require('lodash');

// use _.mixin to extend the lodash api

_.mixin({average: function(collection, callback) {

	return _(collection)
			.map(callback) 
			.reduce(function(result, item) {
				return result + item;
			}) / _.size(collection);
}});


var scores = [ 4, 5, 4, 4, 5, 5, 3];
var avgScore = _.average(scores).toFixed(2);

console.log(avgScore);
