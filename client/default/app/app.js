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
<<<<<<< HEAD
    	App.Global = Ext.create('Global');
    	App.Global.loadStores();
    	App.Global.setLocalstoreValues();
    	App.Global.setAlertHoursDisable(Ext.getStore('LocalStore').getAt(0).get('alertHours'));
		this.goToFirstView();
    },
    
    goToFirstView: function() {
    	var localStore = Ext.getStore('LocalStore');
    	if(localStore.getAt(0).get('email') === ''){
    		App.mainView.setActiveItem(0);
    	}else{
    		App.mainView.setActiveItem(2);
    	}
=======
    	//var loginStore = Ext.getStore('Login');
		//loginStore.sync();
		/*if(loginStore.getCount>0){
			App.mainView.setActiveItem(2);
		}
		else {
			App.mainView.setActiveItem(0);
		}*/
		App.Global = Ext.create('Global');
    	App.mainView.setActiveItem(0);
>>>>>>> parent of 57e55a1... made more changes to SoundAlertView. Continued the implementation of the localStore. Implemented logic for logout button.
    },
});

