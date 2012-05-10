Ext.define('App.controller.SoundAlert', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            'viewport': 'SoundAlertView',
            'store': 'HourListStart',
            'store': 'HourListEnd',
        },
    },
    init: function() {
		this.control({
			'#SoundAlertViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.ConfigurationView.xtype);
				}
			},
			
			
			'#SoundAlertViewSetAlertTogglefield': { 'change': function (me, Slider, thumb, newValue, oldValue, eOpts) {
				Ext.getStore('LocalStore').getAt(0).set('alertStatus',newValue);
				}
			},

			'#SoundAlertViewSelectfieldStart': { 'change': function (selectField, newValue, oldValue) {
				this.changeHourLists(oldValue, newValue);
				}
			},

			'#SoundAlertViewSelectfieldEnd': { 'change': function (selectField, newValue, oldValue) {
				this.changeHourLists(oldValue, newValue);
				}
			},

			'#SoundAlertViewSlider': { 'change': function (control, thumb, newValue) {
				Ext.getStore('LocalStore').getAt(0).set('soundVolume',newValue);
				}
			},

			'#SoundAlertViewAlertHours': { 'check': function () {
				Ext.getStore('LocalStore').getAt(0).set('alertHours',true);
				App.Global.setAlertHoursDisable(true);
				}, 						   'uncheck': function () {
				Ext.getStore('LocalStore').getAt(0).set('alertHours',false);
				App.Global.setAlertHoursDisable(false);
				}
			},

			'#SoundAlertViewOverrideIndividualAlerts': { 'check': function () {
				Ext.getStore('LocalStore').getAt(0).set('overrideIndividualAlerts',true);
			}, 						   'uncheck': function () {
				Ext.getStore('LocalStore').getAt(0).set('overrideIndividualAlerts',false);
			}
		},
		});
    },
    
    changeHourLists: function(oldValue, newValue) {
    	if(App.Global && oldValue && App.Global.fireSoundAlertSelectfieldEvent){
    		App.Global.changeHourLists(oldValue.data.id, newValue.data.id);
		}
    },

	onLaunch: function() {
	}	
});