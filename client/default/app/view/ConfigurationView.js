Ext.define('App.view.ConfigurationView', {
    extend: 'Ext.Panel',
    layout: 'vbox',
    title: "Configuration View",
    alias: "widget.ConfigurationView",
    config: {
    		layout: { type: 'vbox', align: 'stretch' },
		items: [
		    { cls: 'logo', dock: 'top', height: 48 },
		    {xtype: 'spacer'},
    		{
    			xtype : 'button',
    			text: 'Manage Sound Alert',
    			id: 'ConfigurationViewManageSoundAlertButton',
    			style : 'margin: 10px',
    		},
    		{
    			xtype : 'button',
    			text: 'Change Language',
    			id: 'ConfigurationViewChangeLanguageButton',
    			style : 'margin: 10px',
    		},
		    {xtype: 'spacer'},
		    {
    			xtype : 'button',
    			text: 'Back',
    			id: 'ConfigurationViewBackButton',
    			style : 'margin: 10px',
    		},
    		{xtype: 'spacer'},
		]
	},
	initialize: function() {
		this.callParent();
	}
});
