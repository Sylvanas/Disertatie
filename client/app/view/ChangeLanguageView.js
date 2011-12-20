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
				{
					xtype: 'list',
	                store: 'Languages',
	                onItemDisclosure: function(record, btn, index) {
	                	App.viewChanger.changeView(App.view.EditRequestView.xtype);
	                },
	                itemTpl: '<div class="contact"><strong>{name}</strong> </div>'
		        }
		]
	},
	initialize: function() {	
		this.callParent();
	}
});