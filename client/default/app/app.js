Ext.Loader.setConfig({ enabled: true });

Ext.application({
	//phoneStartupScreen: 'images/sencha_logo.png',
	name: 'App',        
	controllers: [
				  'Login',
			      'Register',
	              'Home',
	              'Configuration',
	              'ChangePassword',
	              'ManageRequests',
	              'SoundAlert',
	              'ChangeLanguage',
	              'EditRequest',
	              'SelectFriend',
	              'Map',
	              ],
	initialize: function () {
		this.callParent();
	},	
	launch: function() {
		App.mainView = Ext.create('Ext.Panel', {
			id: 'appContainer',
		    fullscreen: true,
		    layout: 'card',
			items: [
			    { xtype: 'LoginView' },
			    { xtype: 'RegisterView' },
                { xtype: 'HomeView' },
                { xtype: 'ConfigurationView' },
                { xtype: 'ChangePasswordView' },
                { xtype: 'ManageRequestsView' },
                { xtype: 'SoundAlertView' },
                { xtype: 'ChangeLanguageView' },
                { xtype: 'EditRequestView' },
                { xtype: 'SelectFriendView' },
                { xtype: 'MapView' },
            ]
		});
		App.Global = Ext.create('Global');
		App.mainView.setActiveItem(2);
    }
});

