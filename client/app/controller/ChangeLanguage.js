Ext.define('App.controller.ChangeLanguage', {
    extend: 'Ext.app.Controller',	
    views: ['ChangeLanguageView'],
    init: function() {
		// Start listening for events on views
		this.control({
			'#ChangeLanguageViewBackButton': { 'tap': function () {
				App.viewChanger.changeView(App.view.ConfigurationView.xtype);
				}
			},
			
			'#ChangeLanguageViewSaveButton': { 'tap': function () {
				App.viewChanger.changeView(App.view.ConfigurationView.xtype);
				}
			},
		});
    },

	onLaunch: function() {
	}	
});