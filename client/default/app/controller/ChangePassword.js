Ext.define('App.controller.ChangePassword', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            'viewport': 'ChangePasswordView',
        },
    },
    init: function() {
		this.control({		
			'#ChangePasswordViewChangePasswordButton': { 'tap': function () {
					var pass = Ext.getCmp('ChangePasswordViewNewPasswordField').getValue();
					var confirmPassword = Ext.getCmp('ChangePasswordViewConfirmNewPasswordField').getValue();
					if(this.DataIsValid(pass, confirmPassword)){
						this.SendDataToServer(Ext.getStore('LocalStore').getAt(0).get('accountID'), pass);
					}
				}
			},

			'#ChangePasswordViewCancelButton': { 'tap': function () {
					App.Global.changeView(App.view.AccountView.xtype);
				}
			},
			
		});
    },

    DataIsValid: function(pass, confirmPass){
    	var validData = true, errorMessage = '';
    	if(pass == '') { errorMessage += 'Password field is empty<br />'; validData = false; }
    	if(pass != confirmPass){ errorMessage += 'Password and Confirm Password fiels do not match<br />'; validData = false; }
    	if(!validData){ Ext.Msg.alert('', errorMessage, Ext.emptyFn); }
    	return validData;
    },

    SendDataToServer: function(accountID, pass){
		if(App.Global.releaseCode){
			$fh.act({
			      act : 'CloudChangePassword',
			      req : {
			    	  accountID : accountID,
			    	  password : pass
			      }
			    }, function(res) {
			    	if(res.message == 'ok'){
			    		App.Global.changeView(App.view.AccountView.xtype);
			    	}else if (res.message == 'fail') {
	                	  Ext.Msg.alert('Problem updating', "There was a problem updating the password.");
	                  } else {
	                	  Ext.Msg.alert('Connection problem', "The connection with the server could not be established. Please check your internet connection.");
	                  }
			    }, function (code, errorprops, params) {
			    	Ext.Msg.alert('Connection Problems', 'Server problems. Please verify your internet connection, or try again later.', Ext.emptyFn);
			    });
		    }else{
		    	App.Global.changeView(App.view.AccountView.xtype); 
		    }
    },

	onLaunch: function() {
	}	
});