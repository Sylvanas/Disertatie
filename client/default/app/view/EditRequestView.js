Ext.define('App.view.EditRequestView', {
    extend: 'Ext.Panel',
    title: "EditRequest View",
    alias: "widget.EditRequestView",
    config: {
    	scrollable: true,
    	layout: { type: 'vbox' },
		items: [
				{
					xtype : 'toolbar',
					ui: 'light',
					docked: 'top',
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
					flex: 1,
					scrollable: 'none',
					defaults: {
						style : 'height: 30px;',
					},
					items: [{
					        	xtype: 'textfield',
					        	disabled: true,
					        	name: 'id',
						        label: 'ID:',
						        labelWidth: '20%',
					        },
					        {
					        	xtype: 'textfield',
					        	name: 'name',
					        	label: 'Name:',
					        	labelWidth: '30%',
					        },
					        {
					        	xtype: 'checkboxfield',
					        	id: 'EditRequestViewApprovedField',
					        	name: 'approved',
					        	label: 'Approved:',
					        	labelWidth: '40%',
					        },
					        {
					        	xtype: 'checkboxfield',
					        	name: 'ignoreAlerts',
					        	label: 'Ignore alerts:',
					        	labelWidth: '50%',
					        }],
				},
				{
	    			xtype : 'button',
	    			text: 'Approve',
	    			id: 'EditRequestViewApproveButton',
	    			ui: 'action',
	    			style : 'margin: 10px;width:150px;',
	    		},{ xtype: 'spacer' }
		]
	},
	initialize: function() {	
		this.callParent();
	}
});