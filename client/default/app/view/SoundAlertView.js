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
				{
					xtype: 'panel',
					id: 'SoundAlertViewPanel1',
					style : 'margin: 10px;',
					html: '  Set volume:',
	        	},
	        	{
                    xtype: 'sliderfield',
                    name : 'height',
                    label: ''
                },
                {
                	xtype: 'panel',
					id: 'SoundAlertViewPanel2',
					style : 'margin: 10px;',
					html: '  Set ignore hours:',
                },
                {
                	xtype: 'panel',
                	margin: '10px',
                	layout: 'hbox',
                	items: [{ xtype: 'spacer' },
                	        {
                	        	xtype: 'selectfield',
                	        	width: '80px',
                	        	store: 'HourListStart',
            	        		displayField: 'id', 
            	    			valueField: 'id', 
                	        },
                	        {
                	        	xtype: 'panel',
                	        	cls: 'cls1',
                	        	margin: "0px 10px 0px 10px",
            					html: '<div class="cls2">:</div>',
                            },
                	        {
                	        	xtype: 'selectfield',
                	        	width: '80px',
                	        	store: 'HourListEnd',
            	        		displayField: 'id', 
            	    			valueField: 'id', 
                	        },
                	        { xtype: 'spacer' }],
                },
                {
		        	xtype: 'checkboxfield',
		        	margin: '10px',
		        	id: 'SoundAlertViewOverwriteField',
		        	name: 'Overwrite',
		        	label: 'Overwrite individual config:',
		        	labelWidth: '75%',
		        },
		]
	},
	initialize: function() {	
		this.callParent();
	}
});