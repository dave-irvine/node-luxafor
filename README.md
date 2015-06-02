node-luxafor
====

Control your Luxafor notification light via node.js!

[![NPM](https://nodei.co/npm/luxafor.png?downloads=true&stars=true)](https://nodei.co/npm/luxafor/)
Installation
----

We depend on the node.js usb library, which has some dependencies of its own.

https://github.com/nonolith/node-usb

```
npm install luxafor
```

Usage
----

```
var Luxafor = require("luxafor")();

Luxafor.init(function () {
        Luxafor.setLuxaforColor(Luxafor.colors.blue, function () {
	});
});
```

You will probably need to sudo execute your test script else you will get
`LIBUSB_ERROR_ACCESS`.

API
----

###setColor(r, g, b, callback)
Set Luxafor to provided r, g, b values (0-255).

###setLuxaforColor(luxaforColor, callback)
Set Luxafor to a preset Luxafor color (see Luxafor.colors).

###flashColor(r, g, b, callback)
Flash the Luxafor to provided r, g, b values (0-255).


Troubleshooting
----

Help, I get `LIBUSB_ERROR_ACCESS`.
Sudo run your script.

Help, I get `LIBUSB_ERROR_ACCESS` even with sudo and I'm on a Mac.
See https://github.com/nonolith/node-usb/issues/30 :(
