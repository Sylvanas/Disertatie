Ext.define('App.controller.Account', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            'viewport': 'AccountView',
        },
    },
    init: function() {
		this.control({
			'#AccountViewManageRequests': { 'tap': function () {
					Ext.getStore('Requests').removeAll();
					App.Global.getCloudRequests();
				}
			},

			'#AccountViewShowIDButton': { 'tap': function () {
				var localStore = Ext.getStore('LocalStore');
                this.overlay = Ext.Viewport.add({
                    xtype: 'panel',
                    modal: true,
                    hideOnMaskTap: true,
                    showAnimation: {
                        type: 'popIn',
                        duration: 250,
                        easing: 'ease-out'
                    },
                    hideAnimation: {
                        type: 'popOut',
                        duration: 250,
                        easing: 'ease-out'
                    },
                    centered: true,
                    width: 300,
                    height: 75,
                    styleHtmlContent: true,
                    html: 'Your ID is:</br><b>'+localStore.getAt(0).get('accountID')+'</b>',
                    items: [
                        {
                            docked: 'top',
                            xtype: 'toolbar',
                            title: 'Profile ID',
                        }
                    ],
                    scrollable: false
                });
                this.overlay.show();
				}
			},

			'#AccountViewChangePasswordButton': { 'tap': function () {
				App.Global.changeView(App.view.ChangePasswordView.xtype);
			    }
		    },

			'#AccountViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.HomeView.xtype);
				}
			},

		});
    },

	onLaunch: function() {
	}	
});