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
            ]
		});
		App.mainView.setActiveItem(0);
		App.viewChanger = Ext.create('ViewChanger', {view: App.mainView});
    }
});

