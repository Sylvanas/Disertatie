Ext.define('App.controller.Configuration', {
    extend: 'Ext.app.Controller',	
    views: ['ConfigurationView'],
    init: function() {
		this.control({
			'#ConfigurationViewManageSoundAlertButton': { 'tap': function () {
				App.Global.changeView(App.view.SoundAlertView.xtype);
				}
			},
			
			'#ConfigurationViewShowIDButton': { 'tap': function () {
				var loginStore = Ext.getStore('Login');
				var popup = Ext.create('Ext.Panel',{
					floating: true,
					modal: true,
					centered: true,
					width: 300,
					height: 125,
					styleHtmlContent: true,
					html: 'Your ID is:</br><b>'+loginStore.getAt(0).get('id')+'</b>',
				    items: [{
				    	docked: 'top',
				    	xtype: 'toolbar',
				    	title: 'Profile ID',
				    }],
				    scrollable: true,
				});
				popup.show();
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