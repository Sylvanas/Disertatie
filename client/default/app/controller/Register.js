Ext.define('App.controller.Register', {
    extend: 'Ext.app.Controller',	
    config: {
        refs: {
            'viewport': 'RegisterView',
        },
    },
    init: function() {
		this.control({
			'#RegisterViewRegisterButton': { 'tap': function () {
					var emailField = Ext.getCmp('RegisterViewEmailField').getValue();
					var passwordField = Ext.getCmp('RegisterViewPassField').getValue();
					var confirmPasswordField = Ext.getCmp('RegisterViewConfirmPassField').getValue();
					if(this.DataIsValid(emailField, passwordField, confirmPasswordField)){
						if(this.SendDataToServer(emailField, passwordField)){
							App.Global.startSendingGeoData();
							App.Global.changeView(App.view.HomeView.xtype);
						}
					} else {
						App.Global.changeView(App.view.HomeView.xtype);
					}
				}
			},
			
			'#RegisterViewCancelButton': { 'tap': function () {
					App.Global.changeView(App.view.LoginView.xtype);
				}
			},
		});
    },
    
    DataIsValid: function(email, pass, confirmPass){
    	var validData = true, errorMessage = '';
    	if (email == '') { errorMessage += 'Email field is empty<br />'; validData = false; }
    	if (pass == '') { errorMessage += 'Password field is empty<br />'; validData = false; }
    	if (confirmPass == '') { errorMessage += 'Confirm Password field is empty<br />'; validData = false; }
    	if(pass != confirmPass){ errorMessage += 'Password and Confirm Password fiels do not match<br />'; validData = false; }
    	if(!validData){ Ext.Msg.alert('', errorMessage, Ext.emptyFn); }
    	return validData;
    },
    
    SendDataToServer: function(email, pass){
		if(App.Global.releaseCode){
			$fh.act({
			      act : 'CloudRegister',
			      req : {
			        email : email,
			        password : pass
			      }
			    }, function(res) {
			    	if(res.message == 'ok'){
			    		this.HandleServerResponse(res, email, pass);
			    		return true;
			    	}else{
			    		Ext.Msg.alert('Email in use', 'The email is allready in use. If you forgot your password, contact us at...', Ext.emptyFn);
			    		return false;
			    	}
			    }, function (code, errorprops, params) {
			    	Ext.Msg.alert('Connection Problems', 'Server problems. Please verify your internet connection, or try again later.', Ext.emptyFn);
			    	return false;
			    });
		    	}else{
		    		this.HandleServerResponse({message: 'ok', ID: 'sdf4234523'}, email, pass);
		    		return true;
		    	}
    },
    
    HandleServerResponse: function(result, email, pass){
    	var localStoreRecord = Ext.getStore('LocalStore').getAt(0);
		localStoreRecord.set('accountID', result.ID);
		localStoreRecord.set('email', email);
		localStoreRecord.set('password', pass);
    },

	onLaunch: function() {
	}	
});