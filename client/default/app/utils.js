Ext.define('ViewChanger', {
    config: {
        view: null,
        views: new Array()
    },

    constructor: function(parameter) {   	
        this.initConfig(parameter);
        for(var i=0;i<this.getView().items.length;i++){
        	this.getViews().push(this.getView().getAt(i).xtype);
        }
    },
    
    changeView: function(target, durationAnimation) {
    	var speed = 400;
    	if(durationAnimation!=null){
    		speed = durationAnimation;
    	}
    	var source = this.getView().getActiveItem().xtype;
        var direction = this.getViews().indexOf(target) > this.getViews().indexOf(source) ? true : false;
        this.getView().getLayout().setAnimation({
	        type: 'slide',
	        duration: speed,
	        reverse: direction
	    });
    	this.getView().setActiveItem(this.getViews().indexOf(target));
    },
    
});

Ext.define('Global', {
    config: {
        viewChanger: null,
        fireSoundAlertSelectfieldEvent: false,
    },

    constructor: function() {   
    	this.viewChanger = Ext.create('ViewChanger', {view: App.mainView});
    	this.lastFriendsInArea = new Array();
    	this.releaseCode = true;
    	this.deviceCode = (Ext.os.deviceType == 'Phone');
    },
    
    changeView: function(target, durationAnimation) {
    	this.viewChanger.changeView(target, durationAnimation);
    },
    
    getCurrentLocation: function() {
    	if(App.Global.deviceCode){
    		$fh.geo(function(res){
    			return new google.maps.LatLng(res.lat, res.log);
    		});
    	} else {
    		return new google.maps.LatLng(53.340342 + App.Global.GenerateRandomNumberForMaps(),  -6.24312 + App.Global.GenerateRandomNumberForMaps());
    	}
    },
    
    loadStores: function() {
    	this.setDefaultHoursToHourStore(Ext.getStore('HourListStart'));
    	this.setDefaultHoursToHourStore(Ext.getStore('HourListEnd'));
    	var localStore = Ext.getStore('LocalStore'); 
    	/*if(localStore.getCount()>0){
			localStore.removeAt(0);
		}*/
		if(!localStore.getCount()>0){
			localStore.add(this.getDefaultLocalStoreRecord());
		}
    },
    
    setLocalstoreValues: function() {
    	var localStoreRecord = Ext.getStore('LocalStore').getAt(0);
    	Ext.getCmp('SoundAlertViewSetAlertTogglefield').setValue(localStoreRecord.get('alertStatus'));
    	Ext.getCmp('SoundAlertViewSlider').setValue(localStoreRecord.get('soundVolume'));
    	Ext.getCmp('SoundAlertViewAlertHours').setValue(localStoreRecord.get('alertHours'));
    	Ext.getCmp('SoundAlertViewOverrideIndividualAlerts').setValue(localStoreRecord.get('overrideIndividualAlerts'));
    	Ext.getCmp('ChangeLanguageViewSelectField').setValue(localStoreRecord.get('language'));
    },
	
	getDefaultLocalStoreRecord: function (){
		var model = App.model.LocalStore;
        var record = new model({
        	language: 'English', accountID: '', email: '', password: '', alertStatus: 1, soundVolume: '40', startHour: '24' , endHour: '8', alertHours: false , overrideIndividualAlerts: true
        });
        return record; 	
	},
	
	refreshHourLists: function () {
		this.fireSoundAlertSelectfieldEvent = false;
		var localStoreRecord = Ext.getStore('LocalStore').getAt(0);
		this.changeHourListValue(Ext.getStore('HourListStart'), localStoreRecord.get('endHour'));
		Ext.getCmp('SoundAlertViewSelectfieldStart').setValue(localStoreRecord.get('startHour'));
		this.changeHourListValue(Ext.getStore('HourListEnd'), localStoreRecord.get('startHour'));
		Ext.getCmp('SoundAlertViewSelectfieldEnd').setValue(localStoreRecord.get('endHour'));
		this.fireSoundAlertSelectfieldEvent = true;
	},
	
	setAlertHoursDisable: function(disable) {
    	Ext.getCmp('SoundAlertViewSelectfieldStart').setDisabled(disable);
    	Ext.getCmp('SoundAlertViewSelectfieldEnd').setDisabled(disable);
    	Ext.getStore('LocalStore').getAt(0).set('alertHours',disable);
	},
	
	changeHourLists: function (oldValue, newValue) {
		this.fireSoundAlertSelectfieldEvent = false;
		var localStore = Ext.getStore('LocalStore');
		var hourListStartStore = Ext.getStore('HourListStart');
		var hourListEndStore = Ext.getStore('HourListEnd');
		if(localStore.getAt(0).get('startHour') == oldValue) {
			this.changeHourListValue(hourListEndStore, newValue);
			localStore.getAt(0).set('startHour', newValue);
			Ext.getCmp('SoundAlertViewSelectfieldEnd').setStore(hourListEndStore);
			this.setSelectfieldValue(Ext.getCmp('SoundAlertViewSelectfieldEnd'), localStore.getAt(0).get('endHour'));
		}else {
			this.changeHourListValue(hourListStartStore, newValue);
			localStore.getAt(0).set('endHour', newValue);
			Ext.getCmp('SoundAlertViewSelectfieldStart').setStore(hourListStartStore);
			this.setSelectfieldValue(Ext.getCmp('SoundAlertViewSelectfieldStart'), localStore.getAt(0).get('startHour'));
		}
		this.fireSoundAlertSelectfieldEvent = true;
	},
    
	changeHourListValue: function (store, newValue) {
		this.setDefaultHoursToHourStore(store);
		store.removeAt(newValue - 1);
	},
	
	setSelectfieldValue: function (selectfield, value) {
		this.fireSoundAlertSelectfieldEvent = false;
		selectfield.setValue(value);
		this.fireSoundAlertSelectfieldEvent = true;
	},
	
	setDefaultHoursToHourStore: function (store) {
		store.removeAll();
		for(var i=1;i<=24;i++) {
			store.add({id: i});
		}
	},
	
//---------------------------------------------------
	getCloudRequests: function(){
		if(App.Global.releaseCode){
    		$fh.act({
		      act : 'CloudGetRequests',
		      req : {
		    	  accountID : Ext.getStore('LocalStore').getAt(0).get('accountID'),
		      }
		    }, function(res) {
		    	if(res.message == 'ok'){
		    		App.Global.HandleServerResponse(res);
		    	} else if(res.message == 'fail'){
		    		Ext.Msg.alert('Fail to get user', 'Fail to get user.', Ext.emptyFn);
		    	} else {
		    		Ext.Msg.alert('Unexpected problem', 'Unexpected problem.', Ext.emptyFn);
		    	}
		    }, function (code, errorprops, params) {
		    	Ext.Msg.alert('Connection Problems', 'Server problems. Please verify your internet connection, or try again later.', Ext.emptyFn);
		    });
	    	}else{
	    		var result = {message: 'ok', persons: [{id: '4f8e554e96efdd39710205ea', name: '4f8e554e96efdd39710205ea', approved: true},  {id: 'dgw', name: 'dgw', approved: false}, {id: 'ftgsd', name: 'ftgsd', approved: false}]};
	    		App.Global.HandleServerResponse(result);
	        	return;
	    	}
	},
	
	HandleServerResponse: function(result){
		Ext.getStore('Requests').setData(result.persons);
		App.Global.changeView(App.view.ManageRequestsView.xtype);
	},
//---------------------------------------------------
	
	startSendingGeoData: function(){
		setTimeout(function sendGeoData() {
			if(Ext.getStore('LocalStore').getAt(0).get('accountID') != ''){
				//Ext.Msg.alert(Ext.getStore('LocalStore').getAt(0).get('accountID')+ Ext.getStore('LocalStore').getAt(0).get('email')+'-send location to cloud');
				if(App.Global.deviceCode){
					$fh.geo(function(res){//for this to work, the "Use whireless networks" on device must be activated. also accept sending data to goolge
						//Ext.Msg.alert( 'lon='+res.lon+'<br/>, lat='+res.lat+'<br/>, alt='+res.alt+'<br/>, at='+res.when);
					    $fh.act({
				    	      act : 'CloudSendGeoData',
				    	      req : {
				    	    	  accountID : Ext.getStore('LocalStore').getAt(0).get('accountID'),
				    	    	  lat : res.lat,
				    	    	  lon : res.lon,
				    	    	  when : Date.parse(new Date()),
				    	      }
				    	    }, function(res) {
    			    	    	if(res.message == 'ok'){
    			    	    		Ext.Msg.alert('sended geo data', "sended geo data.");//the problem is here. not getting here
    			    	    		App.Global.lastFriendsInArea = new Array();
    			    	    		for(var i=0;i<res.friendsIDs.length;i++){
    			    	    			App.Global.lastFriendsInArea.push(res.friendsIDs[i]);
    			    	    		}
    			    	    		if(res.friendsIDs.length>0){
    			    					$fh.notify({
    			    				        type: 'vibrate'
    			    				      }, function () {}, function (msg) {});
    			    	    		}
    			    			}else if (res.message == 'fail') {
    			    			      Ext.Msg.alert('Failed to send geo data', "Failed to send geo data.");
    			    			}else {
    			    			      Ext.Msg.alert('Connection problem', "The connection with the server could not be established. Please check your internet connection.");
    			    			}
    			    		});
					  });
				}
				else if(App.Global.releaseCode){
					var latitude = Math.round((53.340342 + App.Global.GenerateRandomNumberForMaps()) * 10000000)/10000000;
					var longitude = Math.round((-6.24312 - App.Global.GenerateRandomNumberForMaps()) * 10000000)/10000000;
					var time = Date.parse(new Date());
					//Ext.Msg.alert('sending location data', "send:" + latitude + longitude);
					$fh.act({
			    	      act : 'CloudSendGeoData',
			    	      req : {
			    	    	  accountID : Ext.getStore('LocalStore').getAt(0).get('accountID'),
			    	    	  lat : latitude,
			    	    	  lon : longitude,
			    	    	  when : time,
			    	      }
			    	    }, function(res) {
			    	    	if(res.message == 'ok'){
			    	    		//Ext.Msg.alert('sended geo data', "sended geo data from test code.");
			    	    		App.Global.lastFriendsInArea = new Array();
			    	    		for(var i=0;i<res.friendsIDs.length;i++){
			    	    			App.Global.lastFriendsInArea.push(res.friendsIDs[i]);
			    	    		}
			    	    		if(res.friendsIDs.length>0){
			    	    			Ext.Msg.alert('Friends near you', "Friends near you");
			    	    		}
			    			}else if (res.message == 'fail') {
			    			      Ext.Msg.alert('Failed to send geo data', "Failed to send geo data.");
			    			} else {
			    			      Ext.Msg.alert('Connection problem', "The connection with the server could not be established. Please check your internet connection.");
			    			}
			    		});
				}
			}
			setTimeout(sendGeoData, 10000);
		}, 1);
	},
	
	 IdInFriendInArea: function(id){
			for(var i=0;i<App.Global.lastFriendsInArea.length;i++){
				if(App.Global.lastFriendsInArea[i] == id){
					return true;
				}
			}
			return false;
	},
	
	GenerateRandomNumberForMaps: function(){
		return (Math.round(Math.random()*11 +1))/1000;
	},
	
});
