node-luxafor
====

Control your Luxafor notification light via node.js!

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
        Luxafor.setColor(Luxafor.colors.blue, function () {
	});
});
```

You will probably need to sudo execute your test script else you will get
`LIBUSB_ERROR_ACCESS`.


Troubleshooting
----

Help, I get `LIBUSB_ERROR_ACCESS`.
Sudo run your script.
