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
	road: new Array(),
	currentMap: null,
	currentDirectionsDisplay: null,
	currentDirectionsService: null,
	currentMarkers: null,
    
    setMapObjects: function() {
    	if(!App.map) return;
    	var mapStore = Ext.getStore('Map');
    	this.setMapMarkers(mapStore);
    	this.setRoute(mapStore);
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
    	this.setMarkerInfotexts(map);
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
    
	setMarkerInfotexts: function(map) {
		App.friendMarkers = new Array();
		App.infoWindows = new Array();
		var numberOfMarkers = this.friendMarkers.length;
		for(var i=0;i<numberOfMarkers;i++){
			var record = map.getAt(i);
			var friendInfotext = '<div id="content">'+'</div>'+
				  '<h1 id="firstHeading">Friend location:'+
				  '<div id="bodyContent">'+
				  '<p>Coordinates: '+new google.maps.LatLng(record.get('latitude'), record.get('longitude'))+'</p>'+
				  '<p>Time: '+record.get('time')+'</p>'+
				  '</br>'+
				  '</div></div>';
			App.infoWindows.push(new google.maps.InfoWindow({
				   content: friendInfotext
			}));
			App.friendMarkers.push(this.friendMarkers[i]);	
	}
		if(numberOfMarkers>0){
			google.maps.event.addListener(this.friendMarkers[0], 'click', function() {
				App.infoWindows[0].open(App.map, App.friendMarkers[0]);
			});
		}
		if(numberOfMarkers>1){
			google.maps.event.addListener(this.friendMarkers[1], 'click', function() {
				App.infoWindows[1].open(App.map, App.friendMarkers[1]);
			});
		}
		if(numberOfMarkers>2){
			google.maps.event.addListener(this.friendMarkers[2], 'click', function() {
				App.infoWindows[2].open(App.map, App.friendMarkers[2]);
			});
		}
		if(numberOfMarkers>3){
			google.maps.event.addListener(this.friendMarkers[3], 'click', function() {
				App.infoWindows[3].open(App.map, App.friendMarkers[3]);
			});
		}
		if(numberOfMarkers>4){
			google.maps.event.addListener(this.friendMarkers[4], 'click', function() {
				App.infoWindows[4].open(App.map, App.friendMarkers[4]);
			});
		}
		if(numberOfMarkers>5){
			google.maps.event.addListener(this.friendMarkers[5], 'click', function() {
				App.infoWindows[5].open(App.map, App.friendMarkers[5]);
			});
		}
		if(numberOfMarkers>6){
			google.maps.event.addListener(this.friendMarkers[6], 'click', function() {
				App.infoWindows[6].open(App.map, App.friendMarkers[6]);
			});
		}
		if(numberOfMarkers>7){
			google.maps.event.addListener(this.friendMarkers[7], 'click', function() {
				App.infoWindows[7].open(App.map, App.friendMarkers[7]);
			});
		}
		if(numberOfMarkers>8){
			google.maps.event.addListener(this.friendMarkers[8], 'click', function() {
				App.infoWindows[8].open(App.map, App.friendMarkers[8]);
			});
		}
		if(numberOfMarkers>9){
			google.maps.event.addListener(this.friendMarkers[9], 'click', function() {
				App.infoWindows[9].open(App.map, App.friendMarkers[9]);
			});
		}
		if(numberOfMarkers>10){
			google.maps.event.addListener(this.friendMarkers[10], 'click', function() {
				App.infoWindows[10].open(App.map, App.friendMarkers[10]);
			});
		}
		if(numberOfMarkers>11){
			google.maps.event.addListener(this.friendMarkers[11], 'click', function() {
				App.infoWindows[11].open(App.map, App.friendMarkers[11]);
			});
		}
	},
	
	setRoute: function(mapStore) {
		for(var i=0;i<mapStore.getCount()-1;i++){
		   var points = [new google.maps.LatLng(mapStore.getAt(i).get('latitude'), mapStore.getAt(i).get('longitude')),
		                  new google.maps.LatLng(mapStore.getAt(i+1).get('latitude'), mapStore.getAt(i+1).get('longitude'))];
		   this.road.push(new google.maps.Polyline({
		          map: App.map,
		          path: points,
		          strokeColor: "purple",
		          strokeWeight: 3.5,
		          strokeOpacity: 1.0
		        }));
		}
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
    	for(var i=0;i<this.road.length;i++){
    		this.road[i].setMap(null);
    	}
    	this.friendMarkers= new Array();
    	this.road= new Array();
    	App.friendMarkers = new Array();
		App.infoWindows = new Array();
    },

	onLaunch: function() {
	}	
});