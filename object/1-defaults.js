var _ = require('lodash');

// _.defaults applies value if a property is undefined

var shapes = [ { name: 'Square' }, 
			   { name: 'Rectangle' }, 
			   { name: 'Triangle', sides: 3 }, 
			   { name: 'Pentagon', sides: 5 },
			   { name: 'Circle', sides: NaN } ];


_.each(shapes, function(shape) {
	_.defaults(shape, { sides: 4 } );
});


console.log(shapes);