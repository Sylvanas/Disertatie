Ext.define('App.controller.Account', {
    extend: 'Ext.app.Controller',	
    views: ['AccountView'],
    init: function() {
		this.control({
			'#AccountViewManageRequests': { 'tap': function () {
				App.Global.changeView(App.view.ManageRequestsView.xtype);
				}
			},
			
			'#AccountViewShowIDButton': { 'tap': function () {
				var loginStore = Ext.getStore('Login');
				var popup = Ext.create('Ext.Panel',{
					floating: true,
					modal: true,
					centered: true,
					width: 300,
					height: 125,
					styleHtmlContent: true,
					html: 'Your ID is:</br><b>'+loginStore.getAt(0).get('id')+'</b>',
				    items: [{
				    	docked: 'top',
				    	xtype: 'toolbar',
				    	title: 'Profile ID',
				    }],
				    scrollable: true,
				});
				popup.show();
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

	onLaunch: function() {
	}	
});