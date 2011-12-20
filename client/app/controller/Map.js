Ext.define('App.controller.Map', {
    extend: 'Ext.app.Controller',	
    views: ['MapView'],
    stores: ['Map'],
    init: function() {
		this.control({
			'#MapViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.HomeView.xtype);
				this.clearMapObjects();
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
    
    map: App.Global.map,
    currentMarkers: new Array(),
	currentRoad: null,
	currentMap: null,
	currentDirectionsDisplay: null,
	currentDirectionsService: null,
	currentMarkers: null,
    
    setMapObjects: function() {
    	
    },
    
    clearMapObjects: function() {

    },

	onLaunch: function() {
	}	
});