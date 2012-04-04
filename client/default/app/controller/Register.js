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
						if(!App.Global.releaseCode){
							App.Global.changeView(App.view.HomeView.xtype);
						}
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
			    	//Ext.Msg.alert('more values',  res.message + ' ' + res.guid + ' '+ email + ' '+ pass, Ext.emptyFn);
			    	if(res.message == 'ok'){
			    		//Ext.Msg.alert('values', res.guid + ' '+ email + ' '+ pass, Ext.emptyFn);
			    		this.HandleServerResponse(res, email, pass);
			    		this.TestFunction();
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
		    		this.HandleServerResponse({message: 'ok', guid: 'sdf4234523'}, email, pass);
		    		return true;
		    	}
    },
    
    HandleServerResponse: function(result, email, pass){
    	Ext.Msg.alert('start','start', Ext.emptyFn);
    	/*var localStoreRecord = Ext.getStore('LocalStore').getAt(0);
    	Ext.Msg.alert(localStoreRecord, Ext.emptyFn);
		localStoreRecord.set('accountID', result.guid);
		Ext.Msg.alert(result.guid, Ext.emptyFn);
		localStoreRecord.set('email', email);
		localStoreRecord.set('password', pass);*/
    },
    
    TestFunction: function(){
    	Ext.Msg.alert('test','test', Ext.emptyFn);
    },

	onLaunch: function() {
	}	
});