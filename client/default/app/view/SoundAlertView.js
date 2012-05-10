Ext.define('App.view.SoundAlertView', {
    extend: 'Ext.Panel',
    title: "SoundAlert View",
    alias: "widget.SoundAlertView",
    config: {
    	scrollable: true,
    	layout: { type: 'vbox', align: 'stretch' },
		items: [
				{
					xtype : 'toolbar',
					ui: 'light',
					title: '',
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
					xtype: 'panel',
					id: 'SoundAlertViewSetVolumePanel',
					style : 'margin: 10px;',
					html: '  Set alert:',
					hidden: true,
	        	},
	        	{
                    xtype: 'sliderfield',
                    id: 'SoundAlertViewSlider',
                    style: 'width: 300px',
                    hidden: true,
                },
	        	{
	                xtype: 'togglefield',
	                id: 'SoundAlertViewSetAlertTogglefield',
	                value: 1,
	                label: 'Set alert:',
	                labelWidth: '40%'
	            },
                {
                	xtype: 'panel',
					id: 'SoundAlertViewSetIgnoreHoursPanel',
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
                	        	id: 'SoundAlertViewSelectfieldStart',
                	        	name: 'SelectfieldStart',
                	        	width: '80px',
                	        	store: 'HourListStart',
            	        		displayField: 'id', 
            	    			valueField: 'id', 
                	        }, {
                	        	xtype: 'panel',
                	        	cls: 'cls1',
                	        	margin: "0px 10px 0px 10px",
            					html: '<div class="cls2">:</div>',
                            }, {
                	        	xtype: 'selectfield',
                	        	id: 'SoundAlertViewSelectfieldEnd',
                	        	name: 'SelectfieldEnd',
                	        	width: '80px',
                	        	store: 'HourListEnd',
            	        		displayField: 'id', 
            	    			valueField: 'id', 
                	        },
                	        { xtype: 'spacer' }],
                },
                {
                	xtype: 'panel',
                	cls: "SoundAlertFormPanel",
					style : 'margin: 10px;',
			    	layout: { type: 'vbox', align: 'stretch' },
			    	items: [{
				    		xtype: 'panel',
				    		layout: { type: 'hbox', align: 'stretch' },
				    		items: [{
				    			xtype: 'panel',
				    			flex: 1,
				    			html: "Disable alert hours:",
				    		}, {
						        xtype: 'checkboxfield',
						        id: 'SoundAlertViewAlertHours',
						        style : 'height: 30px;',
						        width: "60px",
				    		}],
			    		}, {
				    		xtype: 'panel',
				    		layout: { type: 'hbox', align: 'stretch' },
				    		items: [{
				    			xtype: 'panel',
				    			flex: 1,	
				    			html: "<span>Overwrite individual </br>config:</span>",
				    		}, {
						        xtype: 'checkboxfield',
						        id: 'SoundAlertViewOverrideIndividualAlerts',
						        style : 'height: 30px;',
						        width: "60px",
				    		}],
			    		}],
                },
		]
	},
	initialize: function() {	
		this.callParent();
	}
});