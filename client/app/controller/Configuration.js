Ext.define('App.controller.Configuration', {
    extend: 'Ext.app.Controller',	
    views: ['ConfigurationView'],
    init: function() {
        console.log('Init home controller');
		// Start listening for events on views
		this.control({
			'#ConfigurationViewBackButton': { 'tap': function () {
				App.viewChanger.changeView(App.view.HomeView.xtype);
				}
			},
			
			'#ConfigurationViewManageSoundAlertButton': { 'tap': function () {
				}
			},
			
			'#ConfigurationViewChangeLanguadgeButton': { 'tap': function () {
				}
			},

		});
    },

	onLaunch: function() {
	}	
});