Ext.define('App.view.SoundAlertView', {
    extend: 'Ext.Panel',
    title: "SoundAlert View",
    alias: "widget.SoundAlertView",
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
									id: 'SoundAlertViewBackButton',
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