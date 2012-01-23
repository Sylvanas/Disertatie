Ext.define('App.controller.SendFriendRequest', {
    extend: 'Ext.app.Controller',	
    views: ['SendFriendRequestView'],
    init: function() {
    	this.validIDField = false;
    	
		this.control({
			'#SendFriendRequestViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.HomeView.xtype);
				}
			},
			
			'#SendFriendRequestViewSendRequestField': { 'keyup': function (field) {
					var sendRequestButton = Ext.getCmp('SendFriendRequestViewSendRequestButton');
					if(field.getValue().length == 1){
						sendRequestButton.setDisabled(false);
						this.validIDField = true;
					}else{
						sendRequestButton.setDisabled(true);
						this.validIDField = false;
					}
				},
														'action': function (field) {
					if(this.validIDField){
						this.sendFriendRequest();
					}
				},
			},
			
			'#SendFriendRequestViewSendRequestButton': { 'tap': function () {
					this.sendFriendRequest();
				}
			},
		});
    },
    
    sendFriendRequest: function() {
    	//var textField = Ext.getCmp('SendFriendRequestViewSendRequestField');
		//alert(textField.getValue());
		App.Global.changeView(App.view.HomeView.xtype);
    },

	onLaunch: function() {
	}	
});