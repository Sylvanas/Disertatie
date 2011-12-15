Ext.define('App.controller.ManageRequests', {
    extend: 'Ext.app.Controller',	
    views: ['ManageRequestsView'],
    init: function() {
		// Start listening for events on views
		this.control({
			'#ManageRequestsViewBackButton': { 'tap': function () {
				App.viewChanger.changeView(App.view.HomeView.xtype);
				}
			},
		});
    },

	onLaunch: function() {
	}	
});