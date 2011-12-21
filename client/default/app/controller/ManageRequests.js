Ext.define('App.controller.ManageRequests', {
    extend: 'Ext.app.Controller',	
    views: ['ManageRequestsView'],
    stores: ['Requests'],
    init: function() {
		this.control({
			'#ManageRequestsViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.HomeView.xtype);
				}
			},
		});
    },

	onLaunch: function() {
	}	
});