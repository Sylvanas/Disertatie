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
    	if(App.Global.releaseCode){
			$fh.act({
		  	      act : 'CloudGetFriendRequests',
		  	      req : {
		  	    	accountID : accountID
		  	      }
		  	    }, function(res) {
		  	    	if(res.message == 'ok'){
		  	    		Ext.Msg.alert('In res.');
		  	    		HomeViewHandleServerResponse(result);
			    	}else if (res.message == 'fail') {
			    		Ext.Msg.alert('Error getting fried requests', "Error getting fried requests.");
	                  } else {
	                	  Ext.Msg.alert('Connection problem', "The connection with the server could not be established. Please check your internet connection.");
	                  }  	    		  	    	
				}, function (code, errorprops, params) {
		    	    	Ext.Msg.alert('Connection Problems', 'Server problems. Please verify your internet connection, or try again later.', Ext.emptyFn);
		    	    });	
		    	}else{
		    		var result = {message: 'ok', requests: [{id: '4f8e554e96efdd39710205ea', name: '4f8e554e96efdd39710205ea', approved: true},  {id: 'dgw', name: 'dgw', approved: false}, {id: 'ftgsd', name: 'ftgsd', approved: false}]};
		    		HomeViewHandleServerResponse(result);
		    		return;
		    	}
    },

	onLaunch: function() {
    },
});

function HomeViewHandleServerResponse(result){
	Ext.Msg.alert('In function.');
	Ext.getStore('SelectFriend').setData(result.requests);
	App.Global.changeView(App.view.SelectFriendView.xtype);
}