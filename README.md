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
var Luxafor = require("./index.js")();

Luxafor.init(function () {
	Luxafor.setColor(Luxafor.colors.blue, function () {
	});
});
```
