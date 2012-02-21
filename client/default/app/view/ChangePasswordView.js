Ext.define('App.view.ChangePasswordView', {
    extend: 'Ext.Panel',
    title: "ChangePassword View",
    alias: "widget.ChangePasswordView",
    config: {
    	scrollable: true,
    	layout: { type: 'vbox', align: 'stretch' },
		items: [
		        { cls: 'logo', docked: 'top', height: 48 },
				{ xtype: 'spacer'},
				{
					xtype : 'textfield',
					id: 'ChangePasswordViewNewPasswordField',
					style : 'padding: 10px; height: 30px;',
					placeHolder : 'New Password'
				},
				{
					xtype : 'emailfield',
					id: 'ChangePasswordViewConfirmNewPasswordField',
					style : 'padding: 10px; height: 30px;',
					placeHolder : 'Confirm New Password'
				},
				{
					xtype : 'button',
					text: 'Change Password',
					id: 'ChangePasswordViewChangePasswordButton',
					ui: 'action',
					style : 'margin: 10px',
				},
				{ xtype: 'spacer'},
				{
					xtype : 'button',
					text: 'Cancel',
					id: 'ChangePasswordViewCancelButton',
					style : 'margin: 10px',
				},
				{
					xtype : 'button',
					text: 'Cancel',
					id: 'ChangePasswordViewCancelButton',
					style : 'margin: 10px',
				},
				{ xtype: 'spacer'},
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