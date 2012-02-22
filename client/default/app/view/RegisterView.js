Ext.define('App.view.RegisterView', {
    extend: 'Ext.Panel',
    title: "Register View",
    alias: "widget.RegisterView",
   config: {
	    scrollable: true,
    	layout: { type: 'vbox', align: 'stretch' },
		items: [
		    { cls: 'logo', docked: 'top', height: 48 },
		    {xtype: 'spacer'},
			{
				xtype : 'emailfield',
				id: 'RegisterViewEmailField',
				name : 'email',
				style : 'padding: 10px; height: 30px;',
				placeHolder : 'Email'
			},
			{
				xtype : 'passwordfield',
				id: 'RegisterViewPassField',
				name : 'password',
				style : 'padding: 10px; height: 30px;',
				placeHolder : 'Password'
			},
			{
				xtype : 'passwordfield',
				id: 'RegisterViewConfirmPassField',
				name : 'confirmPassword',
				style : 'padding: 10px; height: 30px;',
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
				id: 'RegisterViewCancelButton',
				style : 'margin: 10px',
			}, {xtype: 'spacer'},
		]
	},
	initialize: function() {
		this.callParent();
	}
});