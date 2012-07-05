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
			
			'#SoundAlertViewSetAlertCheckboxfield': { 'check': function () {
					App.Global.saveLocalValue('alertStatus','true');
				}, 						   'uncheck': function () {
					App.Global.saveLocalValue('alertStatus','false');
				}
			},

			'#SoundAlertViewSpinnerfieldStart': { 'spin': function (spinner, value, direction) {
					App.Global.saveLocalValue('startHour',value.toString());
				}
			},

			'#SoundAlertViewSpinnerfieldEnd': { 'spin': function (spinner, value, direction) {
					App.Global.saveLocalValue('endHour',value.toString());
				}
			},

			'#SoundAlertViewAlertHours': { 'check': function () {
				App.Global.saveLocalValue('alertHours','true');
				App.Global.setAlertHoursDisable('true');
				}, 						   'uncheck': function () {
				App.Global.saveLocalValue('alertHours','false');
				App.Global.setAlertHoursDisable('false');
				}
			},

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