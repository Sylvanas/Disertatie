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
				{
					xtype: 'list',
					id: 'ManageRequestsViewList',
	                store: 'Requests',
	                flex: 1,
	                onItemDisclosure: function(record, btn, index) {
	                },
	                itemTpl: '<div class="contact">{name}</div>'
		        },
		]
	},
	initialize: function() {	
		this.callParent();
	}
});