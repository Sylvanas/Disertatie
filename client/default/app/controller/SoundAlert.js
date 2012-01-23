Ext.define('App.controller.SoundAlert', {
    extend: 'Ext.app.Controller',	
    views: ['SoundAlertView'],
    stores: [ 'HourListStart', 'HourListEnd' ],
    init: function() {
		this.control({
			'#SoundAlertViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.ConfigurationView.xtype);
				}
			},

			'#SoundAlertViewSelectfieldStart': { 'change': function (selectField, newValue, oldValue) {
				if(!App.Global || !oldValue || !App.SafeToExecuteSoundAlertSelectfieldAction){
					return;
				}
				App.Global.changeHourLists(oldValue.data.id, newValue.data.id);
				}
			},

			'#SoundAlertViewSelectfieldEnd': { 'change': function (selectField, newValue, oldValue) {
				if(!App.Global || !oldValue || !App.SafeToExecuteSoundAlertSelectfieldAction){
					return;
				}
				App.Global.changeHourLists(oldValue.data.id, newValue.data.id);
				}
			},

			'#SoundAlertViewSlider': { 'change': function (control, value) {
				Ext.getStore('LocalStore').getAt(0).set('soundVolume',value);
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

	onLaunch: function() {
	}	
});