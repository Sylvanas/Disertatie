Ext.define('App.view.SendFriendRequestView', {
    extend: 'Ext.Panel',
    title: "SendFriendRequest View",
    alias: "widget.SendFriendRequestView",
    	config: {
    	layout: { type: 'vbox' },
		items: [{
					xtype : 'toolbar',
					ui: 'light',
					dock: 'top',
					style: 'margin-bottom: 20px;',
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
				{
					xtype: 'textfield',
					id: 'SendFriendRequestViewSendRequestField',
	    			height: 30,
	    			style : 'margin: 10px; height: 30px;',
	    			placeHolder : 'Friend ID'
				},
				{
	    			xtype : 'button',
	    			text: 'Send Request',
	    			id: 'SendFriendRequestViewSendRequestButton',
	    			ui: 'action',
	    			style : 'margin: 10px;width:150px;',
	    			disabled: true,
	    		},
		]
	},
	initialize: function() {	
		this.callParent();
	}
});