Ext.define('App.view.LoginView', {
    extend: 'Ext.Panel',
    title: "Login View",
    alias: "widget.LoginView",
    	config: {
    		layout: { type: 'vbox', align: 'stretch' },
		items: [
		        { cls: 'logo', dock: 'top', height: 48 },
		        {
    			xtype : 'textfield',
    			id: 'LoginViewUsernameField',
    			name : 'username',
    			style : 'margin: 10px',
    			placeHolder : 'Username'
    		},
    		{
    			xtype : 'passwordfield',
    			id: 'LoginViewPassField',
    			name : 'password',
    			style : 'margin: 10px',
    			placeHolder : 'Password'
    		},
    		{
    			xtype : 'button',
    			text: 'Login',
    			id: 'LoginViewLoginButton',
    			ui: 'action',
    			style : 'margin: 10px',
    		},
    		{
    			xtype : 'button',
    			text: 'Register',
    			id: 'LoginViewRegisterButton',
    			style : 'margin: 10px',
    		},
		    {xtype: 'spacer'},
    		{
    			xtype : 'button',
    			text : 'Forgot Password?',
    			id: 'LoginViewForgotPasswordButton',
    			ui: 'plain',
    			style : 'margin: 10px',
    		}
		]
	},
	initialize: function() {
		this.callParent();
	}
});