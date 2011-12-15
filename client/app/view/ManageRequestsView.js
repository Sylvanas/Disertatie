Ext.define('App.view.ManageRequestsView', {
    extend: 'Ext.Panel',
    title: "ManageRequests View",
    alias: "widget.ManageRequestsView",
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
									id: 'ManageRequestsViewBackButton',
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