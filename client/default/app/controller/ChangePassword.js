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
			      act : 'ChangePassword',
			      req : {
			    	  accountID : accountID,
			    	  pass : pass
			      }
			    }, function(res) {
			    	App.Global.changeView(App.view.AccountView.xtype);
			    }, function (code, errorprops, params) {
			    	Ext.Msg.alert('Connection Problems', 'Server problems. Please verify your internet connection, or try again later.', Ext.emptyFn);
			    });
		    }else{
		    	App.Global.changeView(App.view.AccountView.xtype); 
		    	return;
		    }
    },

	onLaunch: function() {
	}	
});