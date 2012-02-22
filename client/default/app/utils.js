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
    },
    
    changeView: function(target, durationAnimation) {
    	this.viewChanger.changeView(target, durationAnimation);
    },
    
    getCurrentLocation: function() {
    	return new google.maps.LatLng(0, 0);
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
    	Ext.getCmp('SoundAlertViewSlider').setValue(localStoreRecord.get('soundVolume'));
    	Ext.getCmp('SoundAlertViewAlertHours').setValue(localStoreRecord.get('alertHours'));
    	Ext.getCmp('SoundAlertViewOverrideIndividualAlerts').setValue(localStoreRecord.get('overrideIndividualAlerts'));
    },
    
    clearStore: function(store) {
    	var length = store.getCount();
		for(var i=0;i<length;i++) {
			store.removeAt(0);
		}
	},
	
	getDefaultLocalStoreRecord: function (){
		var model = App.model.LocalStore;
        var record = new model({
        	language: 'English', accountID: '', email: '', password: '', soundVolume: '40', startHour: '24' , endHour: '8', alertHours: false , overrideIndividualAlerts: true
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
		this.clearStore(store);
		for(var i=1;i<=24;i++) {
			store.add({id: i});
		}
	},
	
	startSendindGeoData: function(){
		alert('start');
		/*function thread_start(callback) {
			   setTimeout(callback, 1);
			   return true;
			}*/
	},
});