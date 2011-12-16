Ext.define('App.controller.SoundAlert', {
    extend: 'Ext.app.Controller',	
    views: ['SoundAlertView'],
    init: function() {
		// Start listening for events on views
		this.control({
			'#SoundAlertViewBackButton': { 'tap': function () {
				App.viewChanger.changeView(App.view.ConfigurationView.xtype);
				}
			},
		});
    },

	onLaunch: function() {
	}	
});