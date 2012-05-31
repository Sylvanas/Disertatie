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
					if(App.Global.deviceCode){
	    	    		$fh.geo(function(res){
	    	    			//alert( 'Current location:' + 'lon='+res.lon+'<br/>, lat='+res.lat+'<br/>');
							App.Global.currentLatitude = res.lat;
							App.Global.currentongitude = res.lon;
							Ext.getStore('SelectFriend').removeAll();
							GetFriends(App.Global.getLocalValue('accountID'));
						  });
		    		}else{
		    			App.Global.currentLatitude = Math.round((53.340342 + App.Global.GenerateRandomNumberForMaps()) * 10000000)/10000000;
		    			App.Global.currentongitude = Math.round((-6.24312 - App.Global.GenerateRandomNumberForMaps()) * 10000000)/10000000;
		    			Ext.getStore('SelectFriend').removeAll();
						GetFriends(App.Global.getLocalValue('accountID'));
		        	}
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
				/*$fh.act({
      			    act : 'CloudSendGeoData',
	    			    	      req : {
	    			    	    accountID : Ext.getStore('LocalStore').getAt(0).get('accountID'),
  			    	    	  lat : '53.340352',
				    	    	  lon : '-6.24314',	    	  
				    	    	  when : new Date(),
	    			    	      }
	    			    	    }, function(res) {
	    			    	    	if(res.message == 'ok'){
	    			    	    		Ext.Msg.alert('ok', "ok.");
	    			            }else if (res.message == 'fail') {
	    			                Ext.Msg.alert('Invalid login data', "The login data is invalid. Please retype your email and password.");
	    			            } else {
	    			                Ext.Msg.alert('Connection problem', "The connection with the server could not be established. Please check your internet connection.");
	    			            }
	    						});*/
				App.Global.changeView(App.view.ConfigurationView.xtype);
				}
			},

			'#HomeViewLogoutButton': { 'tap': function () {
				App.Global.saveLocalValue('accountID','null');
				App.Global.saveLocalValue('email','null');
				App.Global.saveLocalValue('password','null');
				App.Global.changeView(App.view.LoginView.xtype);
				}
			},
		});
    },

	onLaunch: function() {
    },
});

function GetFriends(accountID){
	if(App.Global.releaseCode){
		$fh.act({
	  	      act : 'CloudGetFriendRequests',
	  	      req : {
	  	    	accountID : accountID
	  	      }
	  	    }, function(res) {
	  	    	if(res.message == 'ok'){
	  	    		HomeViewHandleServerResponse(res);
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
}

function HomeViewHandleServerResponse(result){
	if(!App.Global.releaseCode){
		App.Global.lastFriendsInArea.push('4f8e554e96efdd39710205ea');
		App.Global.lastFriendsInArea.push('ftgsd');
	}
	for(var i=0;i<result.requests.length;i++){
		result.requests[i]['inArea'] = App.Global.IdInFriendInArea(result.requests[i]['id']);
	}
	Ext.getStore('SelectFriend').setData(result.requests);
	App.Global.changeView(App.view.SelectFriendView.xtype);
	App.Global.lastFriendsInArea = new Array();
}
