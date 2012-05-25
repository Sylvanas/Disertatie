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
				App.Global.saveLocalValue('alertStatus',newValue);
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
				App.Global.saveLocalValue('soundVolume',newValue);
				}
			},

			/*'#SoundAlertViewAlertHours': { 'check': function () {
				App.Global.saveLocalValue('alertHours','true');
				App.Global.setAlertHoursDisable('true');
				}, 						   'uncheck': function () {
				App.Global.saveLocalValue('alertHours','false');
				App.Global.setAlertHoursDisable('false');
				}
			},*/

			'#SoundAlertViewOverrideIndividualAlerts': { 'check': function () {
				App.Global.saveLocalValue('overrideIndividualAlerts','true');
			}, 						   'uncheck': function () {
				App.Global.saveLocalValue('overrideIndividualAlerts','false');
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