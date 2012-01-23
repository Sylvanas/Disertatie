Ext.define('App.controller.Login', {
    extend: 'Ext.app.Controller',	
    views: ['LoginView'],
    stores: [ 'LocalStore' ],
    init: function() {
		this.control({		
			'#LoginViewLoginButton': { 'tap': function () {
				if(this.inputData()){
					//TODO: implement login logic
					var emailField = Ext.getCmp('LoginViewEmailField');
					var passwordField = Ext.getCmp('LoginViewPassField');
					//get the id from cloud
					var loginData = { id: "Test ID", email: emailField.getValue(),  password: passwordField.getValue() };				
					var localStoreRecord = Ext.getStore('LocalStore').getAt(0);
					localStoreRecord.set({ id: loginData['id'], email: loginData['email'],  password: loginData['password'] });
					App.Global.changeView(App.view.HomeView.xtype);
					}
				}
			},
			
			'#LoginViewRegisterButton': { 'tap': function () {
				App.Global.changeView(App.view.RegisterView.xtype);
				}
			},
			
			'#LoginViewForgotPasswordButton': { 'tap': function () {
				//TODO: implement this
				Ext.Msg.prompt("Forgot password", "Please enter your email:", function(email) {
					alert("Your current password was send to the specifyed email");
				});
				}
			},
		});
    },
    
    inputData: function() {
    	return true;
    	var emailField = Ext.getCmp('LoginViewEmailField');
		var passwordField = Ext.getCmp('LoginViewPassField');
		if(!(emailField.getValue().length>0)){
			Ext.Msg.alert('Invalid login data', "Please fill the email field");
			return false;
		}
		if(!(passwordField.getValue().length>0)){
			Ext.Msg.alert('Invalid login data', "Please fill the password field");
			return false;
		}
    	return true;
    },

	onLaunch: function() {
	}	
});