Ext.define('App.view.RegisterView', {
    extend: 'Ext.Panel',
    title: "Register View",
    alias: "widget.RegisterView",
    	config: {
    		layout: { type: 'vbox', align: 'stretch' },
		items: [
		    { cls: 'logo', dock: 'top', height: 48 },
			{
				xtype : 'emailfield',
				id: 'RegisterViewEmailField',
				name : 'email',
				style : 'margin: 10px; height: 30px;',
				placeHolder : 'Email'
			},
			{
				xtype : 'passwordfield',
				id: 'RegisterViewPassField',
				name : 'password',
				style : 'margin: 10px; height: 30px;',
				placeHolder : 'Password'
			},
			{
				xtype : 'passwordfield',
				id: 'RegisterViewConfirmPassField',
				name : 'confirmPassword',
				style : 'margin: 10px; height: 30px;',
				placeHolder : 'Confirm Password'
			},
    		{
    			xtype : 'button',
    			text: 'Register',
    			id: 'RegisterViewRegisterButton',
    			ui: 'action',
    			style : 'margin: 10px',
    		},
    		{xtype: 'spacer'},
			{
				xtype : 'button',
				text: 'Cancel',
				id: 'RegisterViewLoginButton',
				style : 'margin: 10px',
			},
		]
	},
	initialize: function() {
		console.log('initialize register view');
		this.callParent();
	}
});