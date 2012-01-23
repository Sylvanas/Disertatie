Ext.define('App.controller.ChangePassword', {
    extend: 'Ext.app.Controller',	
    views: ['ChangePasswordView'],
    init: function() {
		// Start listening for events on views 
		this.control({
			'#ChangePasswordViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.AccountView.xtype);
				}
			},
			
			'#ChangePasswordViewChangePasswordButton': { 'tap': function () {
				App.Global.changeView(App.view.AccountView.xtype);
				}
			},
			
			'#ChangePasswordViewCancelButton': { 'tap': function () {
				App.Global.changeView(App.view.AccountView.xtype);
				}
			},
			
		});
    },

	onLaunch: function() {
	}	
});