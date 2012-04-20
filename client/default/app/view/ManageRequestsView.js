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
					items : [ {
									xtype: 'button',
									text: 'Back',
									id: 'ManageRequestsViewBackButton',
									ui: 'back',
							  }, { xtype: 'spacer' } ]
				},
				{
					xtype: 'list',
					id: 'ManageRequestsViewList',
	                store: 'Requests',
	                flex: 1,
	                onItemDisclosure: function(record, btn, index) {
	                },
	                itemTpl: '<table>'+
	                  '<tpl for="."">'+
		                  '<tpl  if="approved == false">'+
		                    '<tr>'+
		                        '<td>'+
		                            '<img class="notification_icon" src="./resources/img/notApproved.png">'+
		                        '</td>'+
		                        '<td width="100%">'+
		                            '<span>{name}</span><br/>'+
		                        '</td>'+
		                    '</tr>'+
		                    '</tpl>'+
		                    '<tpl  if="approved == true">'+
		                    '<tr>'+
		                        '<td>'+
		                            '<img class="notification_icon" src="./resources/img/approved.png">'+
		                        '</td>'+
		                        '<td width="100%">'+
		                            '<span>{name}</span><br/>'+
		                        '</td>'+
		                    '</tr>'+
		                    '</tpl>'+
	                    '</tpl>'+
	                '</table>'
		        },
		]
	},
	initialize: function() {	
		this.callParent();
	}
});