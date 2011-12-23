Ext.define('App.view.HomeView', {
    extend: 'Ext.Panel',
    title: "Home View",
    alias: "widget.HomeView",
    config: {
    	layout: { type: 'vbox', align: 'stretch' },
		items: [
		    { cls: 'logo', dock: 'top', height: 48 },
		    {xtype: 'spacer'},
    		{
    			xtype : 'button',
    			text: 'Show friend on map',
    			id: 'HomeViewShowOnMapButton',
    			style : 'margin: 10px',
    		},
    		{
    			xtype : 'button',
    			text: 'Manage requests',
    			id: 'HomeViewManageRequestsButton',
    			style : 'margin: 10px',
    		},
    		{
    			xtype : 'button',
    			text: 'Send friend request',
    			id: 'HomeViewSendFriendRequestButton',
    			style : 'margin: 10px',
    		},
    		{
    			xtype : 'button',
    			text: 'Change password',
    			id: 'HomeViewChangePasswordButton',
    			style : 'margin: 10px',
    		},
    		{
    			xtype : 'button',
    			text: 'Configuration',
    			id: 'HomeViewConfigurationButton',
    			style : 'margin: 10px',
    		},
		    {xtype: 'spacer'},
    		{
    			xtype : 'button',
    			text : 'Logout',
    			id: 'HomeViewLogoutButton',
    			ui: 'action',
    			style : 'margin: 10px',
    		}
		]
	},
	initialize: function() {
		this.callParent();
	}
});
