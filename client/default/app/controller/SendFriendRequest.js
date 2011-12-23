Ext.define('App.controller.SendFriendRequest', {
    extend: 'Ext.app.Controller',	
    views: ['SendFriendRequestView'],
    init: function() {
		this.control({
			'#SendFriendRequestViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.HomeView.xtype);
				}
			},
			
		});
    },

	onLaunch: function() {
	}	
});