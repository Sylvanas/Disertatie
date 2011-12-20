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
    	var map = Ext.getStore('Map');
    	if(map.getCount()>0){
    		var record = map.getAt(0);
    		var firstMarker = new google.maps.Marker({
    	        position: new google.maps.LatLng(record.get('latitude'), record.get('longitude')),
    	        title : 'title',
    	        map: App.map
    	    });
    		this.markers.push(firstMarker);
    	}
	
    	/*for(var i=1;i<map.getCount();i++){
    		var currentMarker = new google.maps.Marker({
    	        position: new google.maps.LatLng(App.clientsView.CurrentClientLocation['latitude'], App.clientsView.CurrentClientLocation['longitude']),
    	        title : record.get('name'),
    	        map: null
    	    });
    	}*/

		/*this.CurrentMarker = new google.maps.Marker({
	        position: new google.maps.LatLng(App.clientsView.CurrentClientLocation['latitude'], App.clientsView.CurrentClientLocation['longitude']),
	        title : record.get('name'),
	        map: this.CurrentMap
	    });
		this.CurrentMap.panTo(new google.maps.LatLng(App.clientsView.CurrentClientLocation['latitude'], App.clientsView.CurrentClientLocation['longitude']));*/
    },
    
    centerMap: function() {
		if(this.markers.length>0){
    		App.map.panTo(this.markers[0].getPosition());
    	}
    },
    
    clearMapObjects: function() {

    },

	onLaunch: function() {
	}	
});