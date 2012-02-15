Ext.define('App.controller.Login', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            'viewport': 'LoginView',
            'store': 'LocalStore',
        },
    },
    init: function() {
		this.control({		
			'#LoginViewLoginButton': { 'tap': function () {
				if(this.inputData()){
					//TODO: implement login logic
					var emailField = Ext.getCmp('LoginViewEmailField');
					var passwordField = Ext.getCmp('LoginViewPassField');
					//get the id from cloud
					//var loginData = { accountID: 'Test ID', email: emailField.getValue(),  password: passwordField.getValue() };
					var loginData = { accountID: 'dg934f9sd', email: 'test mail',  password:'test pass' };	
					var localStoreRecord = Ext.getStore('LocalStore').getAt(0);
					localStoreRecord.set('accountID', loginData['accountID']);
					localStoreRecord.set('email', loginData['email']);
					localStoreRecord.set('password', loginData['password']);
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