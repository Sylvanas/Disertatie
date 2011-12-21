Ext.define('App.controller.SelectFriend', {
    extend: 'Ext.app.Controller',	
    views: ['SelectFriendView'],
    stores: ['SelectFriend'],
    init: function() {
		this.control({
			'#SelectFriendViewBackButton': { 'tap': function () {
				this.getController('Map').setMapObjects();
				App.Global.changeView(App.view.HomeView.xtype);
				}
			},
			
			'#SelectFriendViewList': { 'disclose': function (record,  target,  index,  e,  eOpts) {
				App.Global.changeView(App.view.MapView.xtype);
				this.getController('Map').setMapObjects();
				}
			},
		});
    },

	onLaunch: function() {
	}	
});