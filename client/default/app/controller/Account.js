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
    	/*var result = {message: 'ok', persons: [{id: '4f8e554e96efdd39710205ea', name: '4f8e554e96efdd39710205ea', approved: true},  {id: 'dgw', name: 'dgw', approved: false}, {id: 'ftgsd', name: 'ftgsd', approved: false}]};
		this.HandleServerResponse(result);
		return;*/
    	if(App.Global.releaseCode){
    		$fh.act({
		      act : 'CloudGetRequests',
		      req : {
		    	  accountID : accountID,
		      }
		    }, function(res) {
		    	if(res.message == 'ok'){
		    		//Ext.Msg.alert('ok','ok '+ res.persons.length+res.persons[0]['approved']+' '+res.persons[0]['id']+' '+res.persons[0]['name'], Ext.emptyFn);
		    		//var result = {message: 'ok', persons: [{id: '4f8e554e96efdd39710205ea', name: '4f8e554e96efdd39710205ea', approved: true}]};
		    		//this.HandleServerResponse(result);
		    		var result = {message: 'ok', persons: [{id: '4f8e554e96efdd39710205ea', name: '4f8e554e96efdd39710205ea', approved: true},  {id: 'dgw', name: 'dgw', approved: false}, {id: 'ftgsd', name: 'ftgsd', approved: false}]};
		    		this.HandleServerResponse(result);
		    		return;
		    		//this.HandleServerResponse(res);
		    	} else if(res.message == 'fail'){
		    		Ext.Msg.alert('Fail to get user', 'Fail to get user.', Ext.emptyFn);
		    	} else {
		    		Ext.Msg.alert('Unexpected problem', 'Unexpected problem.', Ext.emptyFn);
		    	}
		    }, function (code, errorprops, params) {
		    	Ext.Msg.alert('Connection Problems', 'Server problems. Please verify your internet connection, or try again later.', Ext.emptyFn);
		    });
	    	}else{
	    		var result = {message: 'ok', persons: [{id: '4f8e554e96efdd39710205ea', name: '4f8e554e96efdd39710205ea', approved: true},  {id: 'dgw', name: 'dgw', approved: false}, {id: 'ftgsd', name: 'ftgsd', approved: false}]};
	    		this.HandleServerResponse(result);
	        	return;
	    	}
    },

    HandleServerResponse: function(result){
    	Ext.Msg.alert('1', '1', Ext.emptyFn);
    	Ext.getStore('Requests').setData(result.persons);
    	Ext.Msg.alert('2', '2', Ext.emptyFn);
    	App.Global.changeView(App.view.ManageRequestsView.xtype);
    },

	onLaunch: function() {
	}	
});