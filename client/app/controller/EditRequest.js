Ext.define('App.controller.EditRequest', {
    extend: 'Ext.app.Controller',	
    views: ['EditRequestView'],
    init: function() {
		// Start listening for events on views
		this.control({
			'#EditRequestViewBackButton': { 'tap': function () {
				App.viewChanger.changeView(App.view.ManageRequestsView.xtype);
				}
			},
		});
    },

	onLaunch: function() {
	}	
});