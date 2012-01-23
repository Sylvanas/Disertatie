Ext.define('App.view.ChangeLanguageView', {
    extend: 'Ext.Panel',
    title: "ChangeLanguage View",
    alias: "widget.ChangeLanguageView",
    	config: {
    	layout: { type: 'vbox', align: 'stretch' },
		items: [
				{
					xtype : 'toolbar',
					ui: 'light',
					items : [{
									xtype : 'button',
									text: 'Back',
									id: 'ChangeLanguageViewBackButton',
									ui: 'back',
								},
								{xtype: 'spacer'},
								{
									xtype : 'button',
									text: 'Save',
									id: 'ChangeLanguageViewSaveButton',
									ui: 'action',
								}]
				},
				{xtype: 'spacer'},
				{
	        		xtype: 'selectfield',
	        		store: 'Languages',
	        		displayField: 'name', 
	    			valueField: 'id', 
	        		margin: '10px',
	        	},
	        	{xtype: 'spacer'},
	        	{
					xtype: 'panel',
					id: 'ChangeLanguageViewPanel',
					html: 'text here<br>text here<br>text here<br>text here<br>',
	        	},
	        	{xtype: 'spacer'},
		]
	},
	initialize: function() {	
		this.callParent();
	}
});