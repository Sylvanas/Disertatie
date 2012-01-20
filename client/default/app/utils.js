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
    },
    
    clearStore: function(store) {
    	var length = store.getCount();
		for(var i=0;i<length;i++) {
			store.removeAt(0);
		}
	},
	
	getDefaultLocalStoreRecord: function (){
		return { id: '1', language: 'English' , accountID: 'test' ,email: '1' , password: '' , soundVolume: '40' , startHour: '24' , endHour: '8' };
	},
	
	refreshHourLists: function () {
		var localStoreRecord = Ext.getStore('LocalStore').getAt(0);
		this.changeHourListValue(Ext.getStore('HourListStart'), localStoreRecord.get('endHour'));
		Ext.getCmp('SoundAlertViewSelectfieldStart').setValue(localStoreRecord.get('startHour'));
		this.changeHourListValue(Ext.getStore('HourListEnd'), localStoreRecord.get('startHour'));
		Ext.getCmp('SoundAlertViewSelectfieldEnd').setValue(localStoreRecord.get('endHour'));
		App.SafeToExecuteSoundAlertSelectfieldAction = true;
	},
	
	changeHourLists: function (oldValue, newValue) { 
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
	},
    
	changeHourListValue: function (store, newValue) {
		this.setDefaultHoursToHourStore(store);
		store.removeAt(newValue - 1);
	},
	
	setSelectfieldValue: function (selectfield, value) {
		App.SafeToExecuteSoundAlertSelectfieldAction = false;
		selectfield.setValue(value);
		App.SafeToExecuteSoundAlertSelectfieldAction = true;
	},
	
	setDefaultHoursToHourStore: function (store) {
		this.clearStore(store);
		for(var i=1;i<=24;i++) {
			store.add({id: i});
		}
	},
});