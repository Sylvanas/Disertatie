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
		});
    },

	onLaunch: function() {
	}	
});