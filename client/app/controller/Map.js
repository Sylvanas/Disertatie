Ext.define('App.controller.Map', {
    extend: 'Ext.app.Controller',	
    views: ['MapView'],
    init: function() {
		this.control({
			'#MapViewBackButton': { 'tap': function () {
				App.viewChanger.changeView(App.view.HomeView.xtype);
				}
			},
			
			'#MapViewShowLastLocationsButton': { 'tap': function (button, event, opt) {
				if(button.getText() == 'Show Last Locations') {
						button.setText('Hide Last Locations');
					}
				else {
					button.setText('Show Last Locations');
					}
				}
			},
		});
    },

	onLaunch: function() {
	}	
});