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
					docked: 'top',
					layout: { pack: 'center' },
					items : [ 
								{
									xtype : 'button',
									text: 'Back',
									id: 'SoundAlertViewBackButton',
									ui: 'back',
								}, { xtype: 'spacer'} 
					         ]
				},
				{
					xtype : 'fieldset',
					margin: 5,
					defaults : {
						labelAlign : 'left',
					},
					items : [ {
						xtype : 'checkboxfield',
						id : 'SoundAlertViewSetAlertTogglefield',
						label : 'Set vibrate:',
						checked: true,
						labelWidth : '70%',
					}, {
						xtype : 'textfield',
						label : 'Ignore Hours Start:',
						labelWidth : '100%',
					}, {
						xtype : 'spinnerfield',
						id : 'SoundAlertViewSelectfieldStart',
						minValue: 1,
						maxValue: 24,
						increment: 1,
						cycle: true,
						labelWidth : '0%',
					}, {
						xtype : 'textfield',
						label : 'Ignore Hours End:',
						labelWidth : '100%',
					}, {
						xtype : 'spinnerfield',
						id : 'SoundAlertViewSelectfieldEnd',
						minValue: 1,
						maxValue: 24,
						increment: 1,
						cycle: true,
						labelWidth : '0%',
					}, {
						xtype : 'checkboxfield',
						id : 'SoundAlertViewAlertHours',
						label : 'Disable alert hours:',
						labelWidth : '70%',
					}, {
						xtype : 'checkboxfield',
						id : 'SoundAlertViewOverrideIndividualAlerts',
						label: "Overwrite individual config:",
						checked: true,
						labelWidth : '70%',
					}]
				},
		]
	},
	initialize: function() {	
		this.callParent();
	}
});