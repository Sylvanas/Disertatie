Ext.define('App.controller.SoundAlert', {
    extend: 'Ext.app.Controller',	
    views: ['SoundAlertView'],
    stores: [ 'HourListStart', 'HourListEnd' ],
    init: function() {
		this.control({
			'#SoundAlertViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.ConfigurationView.xtype);
				}
			},
			
		});
    },

	onLaunch: function() {
	}	
});