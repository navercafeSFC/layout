sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/resource/ResourceModel"

],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, ResourceModel) {
		"use strict";

		return Controller.extend("com.sfc.layout.controller.App", {
			onInit: function () {
                var i18nModel = new ResourceModel({
                bundleName: "com.sfc.layout.i18n.i18n",
                async: true
                });
                this.getView().setModel(i18nModel, "i18n");
			}
		});
	});
