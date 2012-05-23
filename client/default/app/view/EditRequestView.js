Ext.define('App.view.EditRequestView', {
	extend : 'Ext.Panel',
	title : "EditRequest View",
	alias : "widget.EditRequestView",
	config : {
		layout : {
			type : 'vbox'
		},
		items : [ {
			xtype : 'toolbar',
			ui : 'light',
			docked : 'top',
			items : [ {
				xtype : 'button',
				text : 'Back',
				id : 'EditRequestViewBackButton',
				ui : 'back',
			}, {
				xtype : 'spacer'
			}, {
				xtype : 'button',
				text : 'Save',
				id : 'EditRequestViewSaveButton',
				ui: 'confirm',
			}]
		}, {
			xtype : 'fieldset',
			margin: 5,
			defaults : {
				labelAlign : 'left',
			},
			items : [ {
				xtype : 'textfield',
				disabled : true,
				id : 'EditRequestViewId',
				name : 'id',
				label : 'ID:',
				labelWidth : '10%',
			}, {
				xtype : 'textfield',
				id : 'EditRequestViewName',
				label : 'Name:',
				labelWidth : '30%',
			}, {
				xtype : 'checkboxfield',
				id : 'EditRequestViewApprovedField',
				name : 'approved',
				label : 'Approved:',
				labelWidth : '50%',
			}, {
				xtype : 'checkboxfield',
				id : 'EditRequestViewIgnoreAlerts',
				label : 'Ignore alerts:',
				labelWidth : '70%',
			}]
		}

		, {
			xtype : 'button',
			text : 'Approve',
			id : 'EditRequestViewApproveButton',
			ui: 'confirm',
			style : 'margin: 10px;width:150px;',
		}, {
			xtype : 'spacer'
		} ]
	},
	initialize : function() {
		this.callParent();
	}
});