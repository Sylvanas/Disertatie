Ext.define('App.controller.Register', {
    extend: 'Ext.app.Controller',	
    views: ['RegisterView'],
    init: function() {
        console.log('Init home controller');
		// Start listening for events on views
		this.control({
			'#RegisterViewLoginButton': { 'tap': function () {
				App.viewChanger.changeView(App.view.LoginView.xtype);
				}
			},
			
			'#RegisterViewRegisterButton': { 'tap': function () {
				App.viewChanger.changeView(App.view.HomeView.xtype);
				}
			},
		});
    },

	onLaunch: function() {
	}	
});

/*function doRegisterOnServer(username, password, email) {

	var validData = true,
		errorMessage = '';

	if (username === '') {errorMessage += 'Username field is empty<br />'; validData = false; }
	if (password === '') {errorMessage += 'Password field is empty<br />'; validData = false; }
	if (email === '') {errorMessage += 'Email field is empty<br />'; validData = false; }

	if (validData) {
		Ext.Ajax.request({
			url: App.constants.serverUrl + '/user',
			params: { "username" : username, "password" : password, "email" : email },
			method: 'POST',
			callback: function (options, success, response) {
			},
			success: function (response, options) {
				var jsonObj = JSON.parse(response.responseText),
					valid = jsonObj.ok;
				if (valid === 1) {
					App.utils.usernameToKeep = username;
					App.views.viewport.reveal('servicesView');
				} else {
					Ext.Msg.alert('', 'Failed!', Ext.emptyFn);
				}
			},
			failure: function (response, options) {
				Ext.Msg.alert('', 'Failure!', Ext.emptyFn);
			},
			headers: { 'Accept' : 'application/json', 'Access-Control-Request-Headers' : '*' }
		});
		return false;
	} else {
		Ext.Msg.alert('', errorMessage, Ext.emptyFn);
	}
}

Ext.regController('Register', {
	index: function () {
		Ext.getCmp("usernameField").reset();
		Ext.getCmp("emailField").reset();
		Ext.getCmp("passField").reset();
		Ext.getCmp("confPassField").reset();
		App.views.viewport.reveal('registerView');
	},

	doRegister: function () {

		var username = Ext.getCmp("usernameField").getValue(),
			email = Ext.getCmp("emailField").getValue(),
			password = Ext.getCmp("passField").getValue(),
			confPassword = Ext.getCmp("confPassField").getValue();

		if (password !== confPassword) {
			Ext.Msg.alert('', 'Password must match Confirm Password!', Ext.emptyFn);
		} else {
			doRegisterOnServer(username, password, email);
		}
	},
	goToLoginView: function () {
		App.views.viewport.reveal('loginView');
	}
});*/