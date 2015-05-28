var usb = require('usb');
var Luxafor;

Luxafor = function () {
	this.pid = 0xf372;
	this.vid = 0x04d8;
	this.endpoint = undefined;

	this.colors = {
		"red": 82,
		"green": 71,
		"blue": 66,
		"cyan": 67,
		"magenta": 77,
		"yellow": 89,
		"white": 87,
		"off": 79
	};
}

Luxafor.prototype.init = function (cb) {
	var device = undefined,
	interface = undefined;

	device = usb.findByIds(this.vid, this.pid);
	device.open();

	interface = device.interface(0);

	if (interface.isKernelDriverActive()) {
		interface.detachKernelDriver();
	}

	interface.claim();

	this.endpoint = interface.endpoint(1);

	//Dummy data
	var buff = new Buffer([0, 0]);
	this.endpoint.transfer(buff, function () {
		if (cb) {
			cb();
		}
	});
};

Luxafor.prototype.setLuxaforColor = function (color, cb) {
	var buff =  new Buffer(2);

	//Padding
	buff.writeUInt8(0, 0);

	buff.writeUInt8(color, 1);

	this.endpoint.transfer(buff, function () {
		if (cb) {
			cb();
		}
	});
};


module.exports = function () {
	return new Luxafor();
}
