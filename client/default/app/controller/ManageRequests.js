Ext.define('App.controller.ManageRequests', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            'viewport': 'ManageRequestsView',
            'store': 'Requests',
        },
    },
    init: function() {
		this.control({
			'#ManageRequestsViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.AccountView.xtype);
				}
			},
			
		});
    },

	onLaunch: function() {
	}	
});