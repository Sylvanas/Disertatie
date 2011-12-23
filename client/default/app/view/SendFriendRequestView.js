Ext.define('App.view.SendFriendRequestView', {
    extend: 'Ext.Panel',
    title: "SendFriendRequest View",
    alias: "widget.SendFriendRequestView",
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
									id: 'SendFriendRequestViewBackButton',
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