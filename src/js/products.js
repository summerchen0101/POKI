var skipSlider = document.getElementById('skipstep');

noUiSlider.create(skipSlider, {
    start: [ 100, 500 ],
	behaviour: 'drag',
	connect: true,
    step: 10,
	range: {
		'min':  10,
		'max':  500
	}
});


var skipValues = [
	document.getElementById('skip-value-lower'),
	document.getElementById('skip-value-upper')
];

skipSlider.noUiSlider.on('update', function( values, handle ) {
	skipValues[handle].innerHTML = parseInt(values[handle])
});
