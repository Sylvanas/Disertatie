Ext.define('App.controller.SelectFriend', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            'viewport': 'SelectFriendView',
            'store': 'SelectFriend',
        },
    },
    init: function() {
		this.control({
			'#SelectFriendViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.HomeView.xtype);
				}
			},
			
		});
    },

	onLaunch: function() {
	}	
});