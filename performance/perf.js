var _ = require('lodash');

var numbers = _.range(1, 1000000);

// console.log(numbers);

function fn(n) {  };

console.time('forEach')

numbers.forEach(fn);

console.timeEnd('forEach');


console.time('_.each');

	_.each(numbers, fn);

console.timeEnd('_.each');



console.time('for loop')
	
	var length = numbers.length;
	for (var i=0;i<= length; i++) {
		fn(numbers[i]);
	}

console.timeEnd('for loop');