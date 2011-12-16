Ext.define('App.view.ChangePasswordView', {
    extend: 'Ext.Panel',
    title: "ChangePassword View",
    alias: "widget.ChangePasswordView",
    	config: {
    	layout: { type: 'vbox', align: 'stretch' },
		items: [
		        { cls: 'logo', dock: 'top', height: 48 },
				{xtype: 'spacer'},
				{
					xtype : 'textfield',
					id: 'ChangePasswordViewNewPasswordField',
					style : 'margin: 10px; height: 30px;',
					placeHolder : 'New Password'
				},
				{
					xtype : 'emailfield',
					id: 'ChangePasswordViewConfirmNewPasswordField',
					style : 'margin: 10px; height: 30px;',
					placeHolder : 'Confirm New Password'
				},
				{
					xtype : 'button',
					text: 'Change Password',
					id: 'ChangePasswordViewChangePasswordButton',
					ui: 'action',
					style : 'margin: 10px',
				},
				{xtype: 'spacer'},
				{
					xtype : 'button',
					text: 'Cancel',
					id: 'ChangePasswordViewCancelButton',
					style : 'margin: 10px',
				},
		]
	},
	initialize: function() {	
		this.callParent();
	}
});