﻿Ext.define('App.controller.Home', {
    extend: 'Ext.app.Controller',	
    views: ['HomeView'],
    stores: ['Login'],
	//stores: ['Stations'],
    // These "refs" will generate "getters" for each of the view component instances
    // e.g. getBottomField and getStationList
	/*refs: [{
		    selector: 'carousel > panel > #bottomInput',
		    ref: 'bottomField'
	        },
            {
            selector: 'carousel > list', 
            ref: 'stationList'
            }
    ],*/
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
					var localStore = Ext.getStore('LocalStore');
					localStore.removeAt(0);
					localStore.add(App.Global.getDefaultLocalStoreRecord());
					App.Global.changeView(App.view.LoginView.xtype);
				}
			},
		});
    },

	onLaunch: function() {
    },
	
});