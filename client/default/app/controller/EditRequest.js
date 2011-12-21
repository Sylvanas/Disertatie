Ext.define('App.controller.EditRequest', {
    extend: 'Ext.app.Controller',	
    views: ['EditRequestView'],
    init: function() {
		this.control({
			'#EditRequestViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.ManageRequestsView.xtype);
				}
			},
		});
    },

	onLaunch: function() {
	}	
});