/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapbtp./sapui52/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
