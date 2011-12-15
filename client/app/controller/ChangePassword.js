Ext.define('App.controller.ChangePassword', {
    extend: 'Ext.app.Controller',	
    views: ['ChangePasswordView'],
    init: function() {
		// Start listening for events on views 
		this.control({
			'#ChangePasswordViewBackButton': { 'tap': function () {
				App.viewChanger.changeView(App.view.HomeView.xtype);
				}
			},
			
			'#ChangePasswordViewChangePasswordButton': { 'tap': function () {
				App.viewChanger.changeView(App.view.HomeView.xtype);
				}
			},
			
			'#ChangePasswordViewCancelButton': { 'tap': function () {
				App.viewChanger.changeView(App.view.HomeView.xtype);
				}
			},
			
		});
    },

	onLaunch: function() {
	}	
});