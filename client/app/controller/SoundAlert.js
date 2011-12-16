Ext.define('App.controller.SoundAlert', {
    extend: 'Ext.app.Controller',	
    views: ['SoundAlertView'],
    init: function() {
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