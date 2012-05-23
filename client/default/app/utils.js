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
    	this.localData = {language: "English", accountID: "", email: "", password: "", soundVolume: "90", alertStatus: "1", startHour: "4", endHour: "6", alertHours: false, overrideIndividualAlerts: true};
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
    		var latitude = Math.round((53.340342 + App.Global.GenerateRandomNumberForMaps()) * 10000000)/10000000;
			var longitude = Math.round((-6.24312 - App.Global.GenerateRandomNumberForMaps()) * 10000000)/10000000;
    		return new google.maps.LatLng(latitude, longitude);
    	}
    },
    
    saveLocalValue: function(key,value){
    	alert('saveLocalValue:'+App.Global.releaseCode);
    	if(App.Global.releaseCode){
    		alert('saving:'+key+' '+value);
    		$fh.data({act:'save', key:key, val:value}, function(){});
    	}
    	App.Global.localData[key] = value;
    },
    
    getLocalValue: function(key){
    	return App.Global.localData[key];
    },
    
    loadStores: function() {
    	$fh.data({act:'load', key:"language"}, function(res){
    		if(res.val != null)App.Global.localData["language"] = res.val;
    		$fh.data({act:'load', key:"accountID"}, function(res){	
    			if(res.val != null)App.Global.localData["accountID"] = res.val;alert('loaded:'+res.val);
    			$fh.data({act:'load', key:"email"}, function(res){
    				if(res.val != null)App.Global.localData["email"] = res.val;	
    		    	$fh.data({act:'load', key:"password"}, function(res){
    		    		if(res.val != null)App.Global.localData["password"] = res.val;		
    		        	$fh.data({act:'load', key:"soundVolume"}, function(res){
    		        		if(res.val != null)App.Global.localData["soundVolume"] = res.val;	
    		            	$fh.data({act:'load', key:"alertStatus"}, function(res){
    		            		if(res.val != null)App.Global.localData["alertStatus"] = res.val;	
    		                	$fh.data({act:'load', key:"startHour"}, function(res){
    		                		if(res.val != null)App.Global.localData["startHour"] = res.val;	
    		                    	$fh.data({act:'load', key:"endHour"}, function(res){
    		                    		if(res.val != null)App.Global.localData["endHour"] = res.val;	
    		                        	$fh.data({act:'load', key:"alertHours"}, function(res){
    		                        		if(res.val != null)App.Global.localData["alertHours"] = res.val;	
    		                            	$fh.data({act:'load', key:"overrideIndividualAlerts"}, function(res){
    		                            		if(res.val != null)App.Global.localData["overrideIndividualAlerts"] = res.val;	
    		                                	App.Global.setLocalValues();
    		                                	App.Global.goToFirstView();
    		                                	}, function(){});
    		                            	}, function(){});
    		                        	}, function(){});
    		                    	}, function(){});
    		                	}, function(){});
    		            	}, function(){});
    		        	}, function(){});
    		    	}, function(){});
        	}, function(){});
    	}, function(){});
    },

    setLocalValues: function() {
    	Ext.getCmp('SoundAlertViewSetAlertTogglefield').setValue(App.Global.getLocalValue("alertStatus"));
    	Ext.getCmp('SoundAlertViewSlider').setValue(App.Global.getLocalValue("soundVolume"));
    	Ext.getCmp('SoundAlertViewAlertHours').setChecked(App.Global.getLocalValue("alertHours"));
    	Ext.getCmp('SoundAlertViewOverrideIndividualAlerts').setChecked(App.Global.getLocalValue("overrideIndividualAlerts"));
    	Ext.getCmp('ChangeLanguageViewSelectField').setValue(App.Global.getLocalValue("language"));
    },

    goToFirstView: function() {
    	if(App.Global.getLocalValue('accountID') == ""){
    		App.mainView.setActiveItem(0);
    	}else{
    		App.mainView.setActiveItem(2);	
    	}
    },

	refreshHourLists: function () {
		this.fireSoundAlertSelectfieldEvent = false;
		this.changeHourListValue(Ext.getStore('HourListStart'), App.Global.getLocalValue('endHour'));
		Ext.getCmp('SoundAlertViewSelectfieldStart').setValue(App.Global.getLocalValue('startHour'));
		this.changeHourListValue(Ext.getStore('HourListEnd'), App.Global.getLocalValue('startHour'));
		Ext.getCmp('SoundAlertViewSelectfieldEnd').setValue(App.Global.getLocalValue('endHour'));
		this.fireSoundAlertSelectfieldEvent = true;
	},
	
	setAlertHoursDisable: function(disable) {
    	Ext.getCmp('SoundAlertViewSelectfieldStart').setDisabled(disable);
    	Ext.getCmp('SoundAlertViewSelectfieldEnd').setDisabled(disable);
    	App.Global.saveLocalValue('alertHours',disable);
	},
	
	changeHourLists: function (oldValue, newValue) {
		this.fireSoundAlertSelectfieldEvent = false;
		var hourListStartStore = Ext.getStore('HourListStart');
		var hourListEndStore = Ext.getStore('HourListEnd');
		if(App.Global.getLocalValue('startHour') == oldValue) {
			this.changeHourListValue(hourListEndStore, newValue);
			App.Global.saveLocalValue('startHour', newValue);
			Ext.getCmp('SoundAlertViewSelectfieldEnd').setStore(hourListEndStore);
			this.setSelectfieldValue(Ext.getCmp('SoundAlertViewSelectfieldEnd'), App.Global.getLocalValue('endHour'));
		}else {
			this.changeHourListValue(hourListStartStore, newValue);
			App.Global.saveLocalValue('endHour', newValue);
			Ext.getCmp('SoundAlertViewSelectfieldStart').setStore(hourListStartStore);
			this.setSelectfieldValue(Ext.getCmp('SoundAlertViewSelectfieldStart'), App.Global.getLocalValue('startHour'));
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
		    	  accountID : App.Global.getLocalValue('accountID'),
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
			if(App.Global.getLocalValue('accountID') != ''){
				//Ext.Msg.alert(Ext.getStore('LocalStore').getAt(0).get('accountID')+ Ext.getStore('LocalStore').getAt(0).get('email')+'-send location to cloud');
				if(App.Global.deviceCode){
					$fh.geo(function(res){//for this to work, the "Use whireless networks" on device must be activated. also accept sending data to goolge
						//Ext.Msg.alert( 'lon='+res.lon+'<br/>, lat='+res.lat+'<br/>, alt='+res.alt+'<br/>, at='+res.when);
					    $fh.act({
				    	      act : 'CloudSendGeoData',
				    	      req : {
				    	    	  accountID : App.Global.getLocalValue('accountID'),
				    	    	  lat : res.lat,
				    	    	  lon : res.lon,
				    	    	  when : Date.parse(new Date()),
				    	      }
				    	    }, function(res) {
    			    	    	if(res.message == 'ok'){
    			    	    		Ext.Msg.alert('sended geo data', "sended geo data.");//the problem is here. not getting here
    			    	    		App.Global.lastFriendsInArea = new Array();
    			    	    		for(var i=0;i<res.friends.length;i++){
    			    	    			App.Global.lastFriendsInArea.push(res.friends[i]['id']);
    			    	    		}
    			    	    		var aFriendAlertActive = false;
    			    	    		for(var i=0;i<res.friends.length;i++){
    			    	    			if(res.friends[i]['ignoreAlerts']){ 
    			    	    				aFriendAlertActive = true;
    			    	    				break;
    			    	    			}
    			    	    		}
    			    	    		if(res.friends.length>0 && (aFriendAlertActive && (!App.Global.getLocalValue('overrideIndividualAlerts') || App.Global.getLocalValue('alertStatus')))){
    			    	    			if(ShouldAlertDueToIgnoreHours()){
    			    	    				$fh.notify({
        			    				        type: 'vibrate'
        			    				      }, function () {}, function (msg) {});
    			    	    			}
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
			    	    	  accountID : App.Global.getLocalValue('accountID'),
			    	    	  lat : latitude,
			    	    	  lon : longitude,
			    	    	  when : time,
			    	      }
			    	    }, function(res) {
			    	    	if(res.message == 'ok'){
			    	    		//Ext.Msg.alert('sended geo data', "sended geo data from test code.");
			    	    		App.Global.lastFriendsInArea = new Array();
			    	    		for(var i=0;i<res.friends.length;i++){
			    	    			App.Global.lastFriendsInArea.push(res.friends[i]['id']);
			    	    		}
			    	    		var aFriendAlertActive = false;
			    	    		for(var i=0;i<res.friends.length;i++){
			    	    			if(res.friends[i]['ignoreAlerts']){ 
			    	    				aFriendAlertActive = true;
			    	    				break;
			    	    			}
			    	    		}
			    	    		if(res.friends.length>0 && (aFriendAlertActive && (!App.Global.getLocalValue('overrideIndividualAlerts') || App.Global.getLocalValue('alertStatus')))){
			    	    			if(ShouldAlertDueToIgnoreHours()){
			    	    				Ext.Msg.alert('Friends near you', "Friends near you");
			    	    			}
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
	
	ShouldAlertDueToIgnoreHours: function(){
		if(App.Global.getLocalValue('alertHours')){ return true; }
		var currentDate = new Date();
		var currentHourCount = currentDate.getHours();
		var startHour = App.Global.getLocalValue('startHour');
		var endHour = App.Global.getLocalValue('endHour');
		if(startHour<endHour){
			if(currentHourCount > startHour && currentHourCount < endHour){
				return false;
			}
		}else{
			if(!(currentHourCount > endHour && currentHourCount < startHour)){
				return false;
			}
		}
		return true;
	},
	
});
