Ext.define('App.view.LoginView', {
    extend: 'Ext.Panel',
    title: "Login View",
    alias: "widget.LoginView",
   config: {
    		layout: { type: 'vbox', align: 'stretch' },
		items: [
		   { cls: 'logo', docked: 'top', height: 48 },
		   {xtype: 'spacer'},
		   {
    			xtype : 'emailfield',
    			id: 'LoginViewEmailField',
    			cls: 'inputWithBorders',
    			name : 'email',
    			style : 'margin: 10px; height: 30px;',
    			placeHolder : 'Email'
    		},
    		{
    			xtype : 'passwordfield',
    			id: 'LoginViewPassField',
    			cls: 'inputWithBorders',
    			name : 'password',
    			height: 30,
    			style : 'margin: 10px; height: 30px;',
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
    		}, {xtype: 'spacer'},
    		{
    			xtype : 'button',
    			text : 'Forgot Password?',
    			id: 'LoginViewForgotPasswordButton',
    			ui: 'plain',
    			style : 'margin: 10px',
    		}, {xtype: 'spacer'}
		]
	},
	initialize: function() {
		this.callParent();
	}
});