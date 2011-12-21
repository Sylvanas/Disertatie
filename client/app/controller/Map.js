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
    
    currentMarker: null,
    friendMarkers: new Array(),
	currentRoad: null,
	currentMap: null,
	currentDirectionsDisplay: null,
	currentDirectionsService: null,
	currentMarkers: null,
    
    setMapObjects: function() {
    	if(!App.map) return;
    	var map = Ext.getStore('Map');
    	this.setMapMarkers(map);
    	

    	this.centerMap();
    },
    
    setMapMarkers: function(map){
    	this.currentMarker = this.setMarker(App.Global.getCurrentLocation(), 'My location');
    	if(map.getCount()>0){
    		var record = map.getAt(0);
    		var firstMarker = this.setMarker(new google.maps.LatLng(record.get('latitude'), record.get('longitude')), 'Current friend location', "http://maps.google.com/mapfiles/marker"+String.fromCharCode(65)+".png");
    		this.friendMarkers.push(firstMarker);
    	}
    	
    	for(var i=1;i<map.getCount();i++){
    		var record = map.getAt(i);
    		var marker = this.setMarker(new google.maps.LatLng(record.get('latitude'), record.get('longitude')), 'Location '+i, "http://maps.google.com/mapfiles/marker"+String.fromCharCode(65+i)+".png");
    		this.friendMarkers.push(marker);
    	}
    },
    
    setMarker: function (latLng, title, icon, map) {
    	var markerIcon = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
    	var markerMap = App.map;
    	if(icon!=null){
    		markerIcon = icon;
    	}
    	if(map!=null){
    		markerMap = map;
    	}
    	return new google.maps.Marker({
	        position: latLng,
	        title : title,
	        map: markerMap,
	        icon: markerIcon,
	    });
    },
    
    centerMap: function() {
		if(this.friendMarkers.length>0){
    		App.map.panTo(this.friendMarkers[0].getPosition());
    	}
    },
    
    clearMapObjects: function() {
    	this.clearMapMarkers();
    },
    
    clearMapMarkers: function() {
    	this.currentMarker.setMap(null);
    	this.currentMarker = null;
    	for(var i=0;i<this.friendMarkers.length;i++){
    		this.friendMarkers[i].setMap(null);
    	}
    	this.friendMarkers= new Array();
    },

	onLaunch: function() {
	}	
});