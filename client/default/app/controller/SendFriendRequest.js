Ext.define('App.controller.SendFriendRequest', {
    extend: 'Ext.app.Controller',	
    config: {
        refs: {
            'viewport': 'SendFriendRequestView',
        },
    },
    init: function() {
    	this.validIDField = false;
    	
		this.control({
			'#SendFriendRequestViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.HomeView.xtype);
				}
			},
			
			'#SendFriendRequestViewSendRequestField': { 'keyup': function (field) {
					var sendRequestButton = Ext.getCmp('SendFriendRequestViewSendRequestButton');
					if(field.getValue().length > 1){
						sendRequestButton.setDisabled(false);
						this.validIDField = true;
					}else{
						sendRequestButton.setDisabled(true);
						this.validIDField = false;
					}
				},
														'action': function (field) {
					if(this.validIDField){
						this.sendFriendRequest(Ext.getStore('LocalStore').getAt(0).get('accountID'), Ext.getCmp('SendFriendRequestViewSendRequestField').getValue());
					}
				},
			},
			
			'#SendFriendRequestViewSendRequestButton': { 'tap': function () {
					this.sendFriendRequest(Ext.getStore('LocalStore').getAt(0).get('accountID'), Ext.getCmp('SendFriendRequestViewSendRequestField').getValue());
				}
			},
		});
    },
    
    sendFriendRequest: function(senderID, targetID) {
		if(App.Global.releaseCode){
			$fh.act({
		  	      act : 'CloudSendFriendRequest',
		  	      req : {
		  	        senderID : senderID,
		  	        targetID : targetID
		  	      }
		  	    }, function(res) {
		  	    	if(res.message == 'ok'){
		  	    		App.Global.changeView(App.view.HomeView.xtype);
			    	}else if (res.message == 'fail') {
	                	  Ext.Msg.alert('User not found', "The ID is not entered correctly. Please retype the ID.");
	                  } else {
	                	  Ext.Msg.alert('Connection problem', "The connection with the server could not be established. Please check your internet connection.");
	                  }
				}, function (code, errorprops, params) {
		    	    	Ext.Msg.alert('Connection Problems', 'Server problems. Please verify your internet connection, or try again later.', Ext.emptyFn);
		    	    });	
		    	}else{
		    		App.Global.changeView(App.view.HomeView.xtype);
		    	}
    },

	onLaunch: function() {
	}	
});