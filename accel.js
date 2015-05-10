//
// accel.js - Example for Accelerometer
//
var tessel = require('tessel');
var accel  = require('accel-mma84').use(tessel.port['A']);
//
// Initialize the accelerometer modeule.
//
accel.on('ready', function () {
	accel.setOutputRate(1.56, function rateSet() {
		accel.on('data', function (xyz) {
			console.log('x:', xyz[0].toFixed(2),
						'y:', xyz[1].toFixed(2),
						'z:', xyz[2].toFixed(2));			
   		});
	});
});

accel.on('error', function(err){
  console.log('Error:', err);
});
