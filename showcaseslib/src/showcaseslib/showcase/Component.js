sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"showcaseslib/shared/data/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("showcaseslib.showcase.Component", {

		metadata: {
			properties : {
				navTarget: { type : "string"}
			},
			events: {
				buttonClicked: {
					parameters: {
						navTarget: {type: "string"}
					}
				}
			},
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		},
	});
});