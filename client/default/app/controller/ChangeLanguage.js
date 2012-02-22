Ext.define('App.controller.ChangeLanguage', {
    extend: 'Ext.app.Controller',	
    config: {
        refs: {
            'viewport': 'ChangeLanguageView',
            'store': 'Languages',
        },
    },
    init: function() {
		this.control({
			'#ChangeLanguageViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.ConfigurationView.xtype);
				}
			},
			
			'#ChangeLanguageViewSaveButton': { 'tap': function () {
				Ext.getStore('LocalStore').getAt(0).set('language',Ext.getCmp('ChangeLanguageViewSelectField').getRecord().get('name'));
			    App.Global.changeView(App.view.ConfigurationView.xtype);
				}
			},
		});
    },

	onLaunch: function() {
	}	
});