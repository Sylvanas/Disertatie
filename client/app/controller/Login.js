Ext.define('App.controller.Login', {
    extend: 'Ext.app.Controller',	
    views: ['LoginView'],
	//stores: ['Stations'],
    // These "refs" will generate "getters" for each of the view component instances
    // e.g. getBottomField and getStationList
	/*refs: [{
		    selector: 'carousel > panel > #bottomInput',
		    ref: 'bottomField'
	        },
            {
            selector: 'carousel > list', 
            ref: 'stationList'
            }
    ],*/
    init: function() {
        console.log('Init home controller');
		// Start listening for events on views
		this.control({		
			'#LoginViewLoginButton': { 'tap': function () {
				App.viewChanger.changeView(App.view.HomeView.xtype);
				}
			},
			
			'#LoginViewRegisterButton': { 'tap': function () {
				App.viewChanger.changeView(App.view.RegisterView.xtype);
				}
			},
			
			'#LoginViewForgotPasswordButton': { 'tap': function () {
				App.viewChanger.changeView(App.view.RegisterView.xtype);
				}
			},
		});
    },

	onLaunch: function() {
	}	
});