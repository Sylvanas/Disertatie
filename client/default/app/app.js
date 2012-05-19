//Ext.Loader.setConfig({ enabled: true });

Ext.application({
	//phoneStartupScreen: 'images/sencha_logo.png',
	name: 'App',  

	views : [
	         'LoginView',
	         'RegisterView', 
	         'HomeView',
	         'AccountView',
	         'ConfigurationView', 
	         'ChangePasswordView',
	         'ManageRequestsView',
	         'SoundAlertView', 
	         'ChangeLanguageView',
	         'EditRequestView',
	         'SelectFriendView', 
	         'MapView',
	         'SendFriendRequestView', 
	         ],
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
	models: [
             'EditRequest',
             'HourList',
             'Languages',
             'LocalStore',
             'Map',
             'Requests',
             'SelectFriend',
             ],
	stores : [
	             'EditRequest',
	             'HourListEnd',
	             'HourListStart',
	             'Languages',
	             'LocalStore',
	             'Map',
	             'Requests',
	             'SelectFriend',
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
    	//App.mainView.setActiveItem(0);
    	App.Global = Ext.create('Global');
    	try{
    		$fh.act({
    		      act : 'CloudTestFunction',
    		    }, function(res) {});
    	}catch(err){App.Global.releaseCode = false;
    	}
    	App.Global.loadStores();
    	App.Global.setLocalstoreValues();
    	App.Global.setAlertHoursDisable(Ext.getStore('LocalStore').getAt(0).get('alertHours'));
		this.goToFirstView();
		App.Global.startSendingGeoData();
    },
    
    goToFirstView: function() {
    	var localStore = Ext.getStore('LocalStore');
    	if(localStore.getAt(0).get('accountID') == ''){
    		App.mainView.setActiveItem(0);
    	}else{
    		App.mainView.setActiveItem(2);		
    	}
    },
});

