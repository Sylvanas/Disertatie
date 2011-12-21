Ext.define('App.controller.Configuration', {
    extend: 'Ext.app.Controller',	
    views: ['ConfigurationView'],
    init: function() {
		// Start listening for events on views
		this.control({
			'#ConfigurationViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.HomeView.xtype);
				}
			},
			
			'#ConfigurationViewManageSoundAlertButton': { 'tap': function () {
				App.Global.changeView(App.view.SoundAlertView.xtype);
				}
			},
			
			'#ConfigurationViewChangeLanguageButton': { 'tap': function () {
				App.Global.changeView(App.view.ChangeLanguageView.xtype);
				}
			},

		});
    },

	onLaunch: function() {
	}	
});