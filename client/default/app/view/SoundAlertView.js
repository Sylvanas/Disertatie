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
					id: 'SoundAlertViewSetVolumePanel',
					style : 'margin: 10px;',
					html: '  Set volume:',
	        	},
	        	{
                    xtype: 'sliderfield',
                    id: 'SoundAlertViewSlider',
                    style: 'width: 300px',
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
                	        	//width: '80px',
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
				    			html: "Overwrite individual config and do stuff:",
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