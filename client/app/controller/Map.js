Ext.define('App.controller.Map', {
    extend: 'Ext.app.Controller',	
    views: ['MapView'],
    init: function() {
		// Start listening for events on views
		this.control({
			'#MapViewBackButton': { 'tap': function () {
				App.viewChanger.changeView(App.view.HomeView.xtype);
				}
			},
		});
    },

	onLaunch: function() {
	}	
});