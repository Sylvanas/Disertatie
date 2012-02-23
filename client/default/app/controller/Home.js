Ext.define('App.controller.Home', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            'viewport': 'HomeView',
            'store': 'Languages',
        },
    },
    init: function() {
		this.control({	
			'#HomeViewShowOnMapButton': { 'tap': function () {
					//TODO: implement some logic here, might want to go directly to MapView
					Ext.getStore('SelectFriend').removeAll();
					this.GetFriends(Ext.getStore('LocalStore').getAt(0).get('accountID'));
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
    
    GetFriends: function(accountID){
    	var result = {requests: [{id: 'dgdg', name: 'Codrean'},  {id: 'dgw', name: 'Kisu'}, {id: 'ftgsd', name: 'Mantog'}, {id: '4534', name: 'Mangu'}]};this.HandleServerResponse(result);
    	return;
    	$fh.act({
  	      act : 'GetFriends',
  	      req : {
  	    	  accountID : accountID,
  	      }
  	    }, function(res) {
  	    	this.HandleServerResponse(res);
  	    }, function (code, errorprops, params) {
  	    	Ext.Msg.alert('Connection Problems', 'Server problems. Please verify your internet connection, or try again later.', Ext.emptyFn);
  	    });
    },
    
    HandleServerResponse: function(result){
    	Ext.getStore('SelectFriend').setData(result.requests);
    	App.Global.changeView(App.view.SelectFriendView.xtype);
    },

	onLaunch: function() {
    },
});