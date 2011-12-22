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
					items : [{
									xtype : 'button',
									text: 'Back',
									id: 'EditRequestViewBackButton',
									ui: 'back',
								}]
				},
				{
					xtype: 'fieldset',
					style: 'margin:10px',
					defaults: {
						labelWidth: '35%',
						style : 'height: 30px;',
					},
					items: [{
					        	xtype: 'textfield',
						        label: 'ID:',
					        },
					        {
					        	xtype: 'textfield',
					        	label: 'Name:'
					        },
					        {
					        	xtype: 'checkboxfield',
					        	label: 'Approved:'
					        },
					        {
					        	xtype: 'checkboxfield',
					        	label: 'IgnoreAlerts:'
					        }],
				},
		]
	},
	initialize: function() {	
		this.callParent();
	}
});