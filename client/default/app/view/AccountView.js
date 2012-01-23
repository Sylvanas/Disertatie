Ext.define('App.view.AccountView', {
    extend: 'Ext.Panel',
    layout: 'vbox',
    title: "Account View",
    alias: "widget.AccountView",
    config: {
    		layout: { type: 'vbox', align: 'stretch' },
		items: [
		    { cls: 'logo', docked: 'top', height: 48 },
		    {xtype: 'spacer'},
    		{
    			xtype : 'button',
    			text: 'Manage requests',
    			id: 'AccountViewManageRequests',
    			style : 'margin: 10px',
    		},
    		{
    			xtype : 'button',
    			text: 'Show ID',
    			id: 'AccountViewShowIDButton',
    			style : 'margin: 10px',
    		},
    		{
    			xtype : 'button',
    			text: 'Change password',
    			id: 'AccountViewChangePasswordButton',
    			style : 'margin: 10px',
    		},
		    {xtype: 'spacer'},
		    {
    			xtype : 'button',
    			text: 'Back',
    			id: 'AccountViewBackButton',
    			style : 'margin: 10px',
    		},
    		{xtype: 'spacer'},
		]
	},
	initialize: function() {
		this.callParent();
	}
});
