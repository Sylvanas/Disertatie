Ext.define('App.controller.ChangeLanguage', {
    extend: 'Ext.app.Controller',	
    views: ['ChangeLanguageView'],
    stores: ['Languages'],
    init: function() {
		// Start listening for events on views
		this.control({
			'#ChangeLanguageViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.ConfigurationView.xtype);
				}
			},
			
			'#ChangeLanguageViewSaveButton': { 'tap': function () {
				App.Global.changeView(App.view.ConfigurationView.xtype);
				}
			},
		});
    },

	onLaunch: function() {
	}	
});