//Ext.Loader.setConfig({ enabled: true });

Ext.application({
	//phoneStartupScreen: 'images/sencha_logo.png',
	name: 'App',        
	controllers: [
				  'Login',
			      'Register',
	              'Home',
	              'Account',
	              'Configuration',
	              'ChangePassword',
	              'ManageRequests',
	              'SoundAlert',
	              'ChangeLanguage',
	              'EditRequest',
	              'SelectFriend',
	              'Map',
	              'SendFriendRequest',
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
                { xtype: 'AccountView' },
                { xtype: 'ConfigurationView' },
                { xtype: 'ChangePasswordView' },
                { xtype: 'ManageRequestsView' },
                { xtype: 'SoundAlertView' },
                { xtype: 'ChangeLanguageView' },
                { xtype: 'EditRequestView' },
                { xtype: 'SelectFriendView' },
                { xtype: 'MapView' },
                { xtype: 'SendFriendRequestView' },
            ]
		});
		this.startApp();
    },
    
    startApp: function() {
    	App.Global = Ext.create('Global');
    	App.Global.loadStores();
		this.goToFirstView();
    },
    
    goToFirstView: function() {
    	var localStore = Ext.getStore('LocalStore');
    	if(localStore.getAt(0).get('email') === ''){
    		App.mainView.setActiveItem(0);
    	}else{
    		App.mainView.setActiveItem(2);
    	}
    },
});

