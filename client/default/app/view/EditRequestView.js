Ext.define('App.view.EditRequestView', {
    extend: 'Ext.Panel',
    title: "EditRequest View",
    alias: "widget.EditRequestView",
    	config: {
    	layout: { type: 'vbox', align: 'stretch' },
		items: [
				{
					xtype : 'toolbar',
					ui: 'light',
					title: '',
					layout: { pack: 'center' },
					items : [ 
								{
									xtype : 'button',
									text: 'Back',
									id: 'EditRequestViewBackButton',
									ui: 'back',
								}
					         ]
				},
		]
	},
	initialize: function() {	
		this.callParent();
	}
});