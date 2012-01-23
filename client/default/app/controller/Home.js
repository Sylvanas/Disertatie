Ext.define('App.controller.Home', {
    extend: 'Ext.app.Controller',	
    views: ['HomeView'],
    init: function() {
		this.control({	
			'#HomeViewShowOnMapButton': { 'tap': function () {
					//TODO: implement some logic here, might want to go directly to MapView
					App.Global.changeView(App.view.SelectFriendView.xtype);
					//this.getController('Map').setMapObjects();
				}
			},
			
			'#HomeViewAccountButton': { 'tap': function () {
					App.Global.changeView(App.view.AccountView.xtype);
				}
			},
			
			'#HomeViewSendFriendRequestButton': { 'tap': function () {
					App.Global.changeView(App.view.SendFriendRequestView.xtype);
				}
			},
			
			'#HomeViewConfigurationButton': { 'tap': function () {
					App.Global.changeView(App.view.ConfigurationView.xtype);
				}
			},
				
			'#HomeViewLogoutButton': { 'tap': function () {
					App.Global.changeView(App.view.LoginView.xtype);
				}
			},
		});
    },

	onLaunch: function() {
    },
	
});