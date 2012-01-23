Ext.define('App.controller.SelectFriend', {
    extend: 'Ext.app.Controller',	
    views: ['SelectFriendView'],
    stores: ['SelectFriend'],
    init: function() {
		this.control({
			'#SelectFriendViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.HomeView.xtype);
				}
			},
			
			'#SelectFriendViewList': { 'disclose': function (record,  target,  index,  e,  eOpts) {
				this.getController('Map').friendName = record.get('name');
				App.Global.changeView(App.view.MapView.xtype);
				this.getController('Map').setMapObjects();
				}
			},
		});
    },

	onLaunch: function() {
	}	
});