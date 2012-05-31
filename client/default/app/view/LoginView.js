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
    			name : 'email',
    			style : 'margin: 10px; height: 30px;',
    			placeHolder : 'Email'
    		},
    		{
    			xtype : 'passwordfield',
    			id: 'LoginViewPassField',
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
	        	xtype: 'selectfield',
	        	id: 'SoundAlertViewSelectfieldEnd',
	        	name: 'SelectfieldEnd',
	        	width: '80px',
	        	/*store: 'HourListEnd',
        		displayField: 'id', 
    			valueField: 'id', */
	        	options: [
	                        {text: '1',  value: '1'},{text: '2', value: '2'},{text: '3',  value: '3'},{text: '4',  value: '4'},{text: '5',  value: '5'},
	                        {text: '6',  value: '6'},{text: '7', value: '7'},{text: '8',  value: '8'},{text: '9',  value: '9'},{text: '10',  value: '10'},
	                        {text: '11',  value: '11'},{text: '12', value: '12'},{text: '13',  value: '13'},{text: '14',  value: '14'},{text: '15',  value: '15'},
	                        {text: '16',  value: '16'},{text: '17', value: '17'},{text: '18',  value: '18'},{text: '19',  value: '19'},{text: '20',  value: '20'},
	                        {text: '21',  value: '21'},{text: '22', value: '22'},{text: '23',  value: '23'},{text: '24',  value: '24'}
	                    ]
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