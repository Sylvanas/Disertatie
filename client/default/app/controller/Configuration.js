Ext.define('App.controller.Configuration', {
    extend: 'Ext.app.Controller',	
    config: {
        refs: {
            'viewport': 'ConfigurationView',
        },
    },
    init: function() {
		this.control({
			'#ConfigurationViewManageSoundAlertButton': { 'tap': function () {				
				App.Global.refreshHourLists();
				App.Global.fireSoundAlertSelectfieldEvent = true;
				App.Global.changeView(App.view.SoundAlertView.xtype);
				}
			},
			
			'#ConfigurationViewChangeLanguageButton': { 'tap': function () {
				App.Global.changeView(App.view.ChangeLanguageView.xtype);
				}
			},
			
			'#ConfigurationViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.HomeView.xtype);
				}
			},

		});
    },

	onLaunch: function() {
	}	
});