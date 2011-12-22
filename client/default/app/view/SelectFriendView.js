Ext.define('App.view.SelectFriendView', {
    extend: 'Ext.Panel',
    title: "SelectFriend View",
    alias: "widget.SelectFriendView",
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
									id: 'SelectFriendViewBackButton',
									ui: 'back',
								},
					         ]
				},
				{
					xtype: 'list',
	                store: 'SelectFriend',
	                id: 'SelectFriendViewList',
	                onItemDisclosure: function(record, btn, index) {
	                },
	                itemTpl: '<div class="contact"><strong>{name}</strong></div>'
		        },
		]
	},
	initialize: function() {	
		this.callParent();
	}
});