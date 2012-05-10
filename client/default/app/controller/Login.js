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
					var localStoreRecord = Ext.getStore('LocalStore').getAt(0);
	    	    	localStoreRecord.set('accountID', 'asdf34f34rf');
	    	    	localStoreRecord.set('email', Ext.getCmp('LoginViewEmailField').getValue());
	    	    	localStoreRecord.set('password', Ext.getCmp('LoginViewPassField').getValue());
	    	    	if(App.Global.releaseCode){
	    	    		if(this.validInputData()){
	    					var email = Ext.getCmp('LoginViewEmailField').getValue();
	    					var password = Ext.getCmp('LoginViewPassField').getValue();
	    					$fh.act({
	    			    	      act : 'CloudLogIn',
	    			    	      req : {
	    			    	        email : email,
	    			    	        password : password
	    			    	      }
	    			    	    }, function(res) {
	    			    	    	if(res.message == 'ok'){
	    			    	    		var localStoreRecord = Ext.getStore('LocalStore').getAt(0);
		    			    	    	localStoreRecord.set('accountID', res.guid);
		    			    	    	localStoreRecord.set('email', Ext.getCmp('LoginViewEmailField').getValue());
		    			    	    	localStoreRecord.set('password', Ext.getCmp('LoginViewPassField').getValue());
		    			    	    	App.Global.changeView(App.view.HomeView.xtype);
	    			                  }else if (res.message == 'fail') {
	    			                	  Ext.Msg.alert('Invalid login data', "The login data is invalid. Please retype your email and password.");
	    			                  } else {
	    			                	  Ext.Msg.alert('Connection problem', "The connection with the server could not be established. Please check your internet connection.");
	    			                  }
	    						});		
	    					}
	    	    	}else{
	    	    		App.Global.changeView(App.view.HomeView.xtype);
	    	    	}
				}
			},
			
			'#LoginViewRegisterButton': { 'tap': function () {
				$fh.notify({
			        type: 'vibrate'//'beep' or 'vibrate'
			      }, function () {
			    	  App.Global.changeView(App.view.RegisterView.xtype);
			      }, function (msg) {
			        //app.u.notify.error('Device doesn\'t support this feature (Error: ' + msg);
			      });
					
				}
			},
			
			'#LoginViewForgotPasswordButton': { 'tap': function () {
					//TODO: implement this
					if(App.Global.releaseCode){
						$fh.act({
  			    	      act : 'CustomClearTables',
						}, function(res) {
							Ext.Msg.prompt("Forgot password", "Please enter your email:", function(email) {
								Ext.Msg.alert("","Your current password was send to the specifyed email. Tables cleared");
							});
						});
					} else {
						Ext.Msg.prompt("Forgot password", "Please enter your email:", function(email) {
							Ext.Msg.alert("","Your current password was send to the specifyed email");
						});
					}
				}
			},
		});
    },
    
    validInputData: function() {
    	if(App.Global.releaseCode){
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
    	}else{
    		return true;
    	}
    },

	onLaunch: function() {
	}	
});