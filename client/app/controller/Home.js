Ext.define('App.controller.Home', {
    extend: 'Ext.app.Controller',	
    views: ['HomeView'],
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
				App.Global.changeView(App.view.MapView.xtype);
				this.getController('Map').setMapObjects();
				}
			},
			
			'#HomeViewManageRequestsButton': { 'tap': function () {
				App.Global.changeView(App.view.ManageRequestsView.xtype);
				}
			},
			
			'#HomeViewChangePasswordButton': { 'tap': function () {
				App.Global.changeView(App.view.ChangePasswordView.xtype);
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