Ext.define('App.controller.Login', {
    extend: 'Ext.app.Controller',	
    views: ['LoginView'],
	//stores: ['Stations'],
    // These "refs" will generate "getters" for each of the view component instances
    // e.g. getBottomField and getStationList
	/*refs: [{
		    selector: 'carousel > panel > #bottomInput',
		    ref: 'bottomField'
	        },
            {
            selector: 'carousel > list', 
            ref: 'stationList'
            }
    ],*/
    init: function() {
        console.log('Init home controller');
		// Start listening for events on views
		this.control({		
			'#LoginViewLoginButton': { 'tap': function () {
				App.viewChanger.changeView(App.view.HomeView.xtype);
				}
			},
			
			'#LoginViewRegisterButton': { 'tap': function () {
				App.viewChanger.changeView(App.view.RegisterView.xtype);
				}
			},
			
			'#LoginViewForgotPasswordButton': { 'tap': function () {
				App.viewChanger.changeView(App.view.RegisterView.xtype);
				}
			},
		});
    },

	onLaunch: function() {
	}	
});

/*function doLoginOnServer(username, password) {

	var validData = true,
		errorMessage = '',
		jsonObj,
		valid;

	if (username === '') {errorMessage += 'Username field is empty<br />'; validData = false; }
	if (password === '') {errorMessage += 'Password field is empty<br />'; validData = false; }

	if (validData) {
		Ext.Ajax.request({
			url: App.constants.serverUrl + '/login' + '?username=' + username + '&password=' + password,
			method: 'GET',
			callback: function (options, success, response) {
			},
			success: function (response, options) {
				jsonObj = JSON.parse(response.responseText);
				valid = jsonObj.ok;
				if (valid === 1) {
					App.utils.usernameToKeep = username;
					if(App.utils.deviceToken != '') sendDeviceTokenToServer(App.utils.deviceToken);
					if(App.utils.apID != '') sendAPIDToServer(App.utils.apID);

					try {
						App.stores.Notifications.load();
					} catch (err) {						
						console.log('Error loading offline notifications: ' + err.message);
					}
					
					App.stores.services.filter('serviceStatus', 1);

					// Refresh the notification stores
					Ext.dispatch({
						controller: 'Services',
						action: 'refresh'
					});
					
					Ext.dispatch({
						controller: 'Dashboard',
						action: 'index'
					});
				} else {
					Ext.Msg.alert('', 'Wrong username or pass', Ext.emptyFn);
				}
			},
			failure: function (response, options) {
				Ext.Msg.alert('', 'Unable to connect', Ext.emptyFn);
			},
			headers: { 'Accept' : 'application/json', 'Access-Control-Request-Headers' : '*' }
		});

		return false;

	} else {
		Ext.Msg.alert('', errorMessage, Ext.emptyFn);
	}
}

function sendAPIDToServer(APID) {
	 Ext.Ajax.request({
	  url: App.constants.serverUrl + '/user/' + App.utils.usernameToKeep + '/device',
	  params: {  "apid" : APID },
	  method: 'POST',
	  callback: function (options, success, response) {
	  },
	  success: function (response, options) {
	  },
	  failure: function (response, options) {
	  },

	  headers: { 'Accept' : 'application/json', 'Access-Control-Request-Headers' : '*' }
	 });
	 return false;
}

function sendDeviceTokenToServer(deviceToken) {
	 Ext.Ajax.request({
	  url: App.constants.serverUrl + '/user/' + App.utils.usernameToKeep + '/device',
	  params: {  "device_token" : deviceToken },
	  method: 'POST',
	  callback: function (options, success, response) {
	  },
	  success: function (response, options) {
	  },
	  failure: function (response, options) {
	  },

	  headers: { 'Accept' : 'application/json', 'Access-Control-Request-Headers' : '*' }
	 });
	 return false;
}

Ext.regController('Login', {
	index: function () {
		Ext.getCmp("loginUsernameField").reset();
		Ext.getCmp("loginPassField").reset();
		App.views.viewport.reveal('loginView');
	},

	goToRegisterView : function () {
		Ext.dispatch({
			controller: 'Register',
			action: 'index'
		});
	},

	doLogin: function () {
		var username = Ext.getCmp("loginUsernameField").getValue(),
			password = Ext.getCmp("loginPassField").getValue();

		doLoginOnServer(username, password);
	}
});*/