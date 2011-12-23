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
					items : [{
									xtype : 'button',
									text: 'Back',
									id: 'EditRequestViewBackButton',
									ui: 'back',
								},
								{xtype: 'spacer'},
								{
									xtype : 'button',
									text: 'Save',
									id: 'EditRequestViewSaveButton',
									ui: 'action',
								}]
				},
				{
					xtype: 'formpanel',
					id: 'EditRequestViewFormPanel',
					style: 'margin:10px',
					defaults: {
						labelWidth: '35%',
						style : 'height: 30px;',
					},
					items: [{
					        	xtype: 'textfield',
					        	disabled: true,
					        	name: 'id',
						        label: 'ID:',
					        },
					        {
					        	xtype: 'textfield',
					        	name: 'name',
					        	label: 'Name:'
					        },
					        {
					        	xtype: 'checkboxfield',
					        	id: 'EditRequestViewApprovedField',
					        	name: 'approved',
					        	label: 'Approved:'
					        },
					        {
					        	xtype: 'checkboxfield',
					        	name: 'ignoreAlerts',
					        	label: 'Ignore alerts:'
					        }],
				},
		]
	},
	initialize: function() {	
		this.callParent();
	}
});