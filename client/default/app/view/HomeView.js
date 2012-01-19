Ext.define('App.view.HomeView', {
    extend: 'Ext.Panel',
    layout: 'vbox',
    title: "Home View",
    alias: "widget.HomeView",
    config: {
    	layout: { type: 'vbox', align: 'stretch' },
		items: [
		    { cls: 'logo', docked: 'top', height: 48 },
    		{
    			xtype : 'button',
    			text: 'Show friend on map',
    			id: 'HomeViewShowOnMapButton',
    			style : 'margin-left: 10px;margin-right: 10px;margin-bottom: 10px;margin-top: 30px;',
    		},
    		{
    			xtype : 'button',
    			text: 'Account',
    			id: 'HomeViewAccountButton',
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
    			text: 'Configuration',
    			id: 'HomeViewConfigurationButton',
    			style : 'margin-left: 10px;margin-right: 10px;margin-bottom: 0px;margin-top: 10px;',
    		},
    		{xtype: 'spacer'},
    		{
    			xtype : 'button',
    			text : 'Logout',
    			id: 'HomeViewLogoutButton',
    			ui: 'action',
    			style : 'margin: 10px',
    		},
    		{xtype: 'spacer'},
		]
	},
	initialize: function() {
		this.callParent();
	}
});
