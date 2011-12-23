Ext.define('App.controller.Login', {
    extend: 'Ext.app.Controller',	
    views: ['LoginView'],
    stores: ['Login'],
    init: function() {
		this.control({		
			'#LoginViewLoginButton': { 'tap': function () {
				if(this.inputData()){
					//TODO: implement login logic
					var emailField = Ext.getCmp('LoginViewEmailField');
					var passwordField = Ext.getCmp('LoginViewPassField');
					//get the id from cloud
					var loginData = { id: "sdfsdf", email: emailField.getValue(),  password: passwordField.getValue() };				
					var loginStore = Ext.getStore('Login');
					App.Global.clearStore(loginStore);
					loginStore.add({ id: loginData['id'], email: loginData['email'],  password: loginData['password'] });
					App.Global.changeView(App.view.HomeView.xtype);
					}
				}
			},
			
			'#LoginViewRegisterButton': { 'tap': function () {
				App.Global.changeView(App.view.RegisterView.xtype);
				}
			},
			
			'#LoginViewForgotPasswordButton': { 'tap': function () {
				//TODO: message to fill email should appear
				}
			},
		});
    },
    
    inputData: function() {
    	//TODO: check if data is valid
    	return true;
    },

	onLaunch: function() {
	}	
});