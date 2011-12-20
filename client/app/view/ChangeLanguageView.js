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
					items : [ 
								{
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
								},
					         ]
				},
				/*{
	        		xtype: 'selectfield',
	        		store: 'Languages',
	        		displayField: 'name', 
	    			valueField: 'id', 
	        		//placeHolder:'Language',
	        		//style : 'margin: 10px',
	        	},*/
		]
	},
	initialize: function() {	
		this.callParent();
	}
});