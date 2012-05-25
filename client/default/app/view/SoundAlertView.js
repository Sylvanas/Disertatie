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
                	        	/*store: 'HourListEnd',
            	        		displayField: 'id', 
            	    			valueField: 'id', */
                	        	options: [
                	                        {text: '1',  value: '1'},{text: '2', value: '2'},{text: '3',  value: '3'},{text: '4',  value: '4'},{text: '5',  value: '5'},
                	                        {text: '6',  value: '6'},{text: '7', value: '7'},{text: '8',  value: '8'},{text: '9',  value: '9'},{text: '10',  value: '10'},
                	                        {text: '11',  value: '11'},{text: '12', value: '12'},{text: '13',  value: '13'},{text: '14',  value: '14'},{text: '15',  value: '15'},
                	                        {text: '16',  value: '16'},{text: '17', value: '17'},{text: '18',  value: '18'},{text: '19',  value: '19'},{text: '20',  value: '20'},
                	                        {text: '21',  value: '21'},{text: '22', value: '22'},{text: '23',  value: '23'},{text: '24',  value: '24'}
                	                    ]
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