Ext.Loader.setConfig({ enabled: true });

/*Ext.require([    
    'Ext.XTemplate',
    'Ext.Panel',
	'Ext.Button',
    'Ext.List'
]);*/

Ext.application({
	//phoneStartupScreen: 'images/sencha_logo.png',
	name: 'App',        
	controllers: [
				  'Login',
			      'Register',
	              'Home',
	              'Configuration',
	              'Map',
	              'ChangePassword',
	              'ManageRequests',
	              'SoundAlert',
	              'ChangeLanguage',
	              'EditRequest',
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
                { xtype: 'MapView' },
                { xtype: 'ChangePasswordView' },
                { xtype: 'ManageRequestsView' },
                { xtype: 'SoundAlertView' },
                { xtype: 'ChangeLanguageView' },
                { xtype: 'EditRequestView' },
            ]
		});
		App.mainView.setActiveItem(2);
		App.viewChanger = Ext.create('ViewChanger', {view: App.mainView});
    }
});

