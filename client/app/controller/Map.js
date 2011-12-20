Ext.define('App.controller.Map', {
    extend: 'Ext.app.Controller',	
    views: ['MapView'],
    stores: ['Map'],
    init: function() {
		this.control({
			'#MapViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.SelectFriendView.xtype);
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
    
    markers: new Array(),
	currentRoad: null,
	currentMap: null,
	currentDirectionsDisplay: null,
	currentDirectionsService: null,
	currentMarkers: null,
    
    setMapObjects: function() {
    	if(!App.map) return;
    	//for(int i=0;i<Map)
    	//var x = Ext.getStore('Map');
    	//alert(x);
		/*this.CurrentMarker = new google.maps.Marker({
	        position: new google.maps.LatLng(App.clientsView.CurrentClientLocation['latitude'], App.clientsView.CurrentClientLocation['longitude']),
	        title : record.get('name'),
	        map: this.CurrentMap
	    });
		this.CurrentMap.panTo(new google.maps.LatLng(App.clientsView.CurrentClientLocation['latitude'], App.clientsView.CurrentClientLocation['longitude']));*/
    },
    
    clearMapObjects: function() {

    },

	onLaunch: function() {
	}	
});