Ext.define('App.controller.Account', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            'viewport': 'AccountView',
        },
    },
    init: function() {
		this.control({
			'#AccountViewManageRequests': { 'tap': function () {
					Ext.getStore('Requests').removeAll();
					this.GetRequests(Ext.getStore('LocalStore').getAt(0).get('accountID'));
				}
			},

			'#AccountViewShowIDButton': { 'tap': function () {
				var localStore = Ext.getStore('LocalStore');
                this.overlay = Ext.Viewport.add({
                    xtype: 'panel',
                    modal: true,
                    hideOnMaskTap: true,
                    showAnimation: {
                        type: 'popIn',
                        duration: 250,
                        easing: 'ease-out'
                    },
                    hideAnimation: {
                        type: 'popOut',
                        duration: 250,
                        easing: 'ease-out'
                    },
                    centered: true,
                    width: 300,
                    height: 75,
                    styleHtmlContent: true,
                    html: 'Your ID is:</br><b>'+localStore.getAt(0).get('accountID')+'</b>',
                    items: [
                        {
                            docked: 'top',
                            xtype: 'toolbar',
                            title: 'Profile ID',
                        }
                    ],
                    scrollable: false
                });
                this.overlay.show();
				}
			},

			'#AccountViewChangePasswordButton': { 'tap': function () {
				App.Global.changeView(App.view.ChangePasswordView.xtype);
			    }
		    },

			'#AccountViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.HomeView.xtype);
				}
			},

		});
    },

    GetRequests: function(accountID){
    	var result = {requests: [{id: 'dgdg', name: 'Spencer'},  {id: 'dgw', name: 'Maintz'}, {id: 'ftgsd', name: 'Conran'}, {id: '4534', name: 'Avins'}]};this.HandleServerResponse(result);
    	return;
    	$fh.act({
  	      act : 'GetRequests',
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
    	Ext.getStore('Requests').setData(result.requests);
    	App.Global.changeView(App.view.ManageRequestsView.xtype);
    },

	onLaunch: function() {
	}	
});