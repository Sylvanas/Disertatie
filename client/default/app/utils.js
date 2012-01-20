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
    
    clearStore: function(store) {
    	var length = store.getCount();
		for(var i=0;i<length;i++) {
			store.removeAt(0);
		}
	},
	
	getDefaultLocalStoreRecord: function (){
		return { id: '1', language: 'English' , email: '1' , password: '' , soundVolume: '40' , startHour: '24' , endHour: '8' };
	},
	
	refreshHourLists: function (startValue, endValue) {
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
		store.add([
       	 {id: '1'},
       	 {id: '2'},
       	 {id: '3'},
       	 {id: '4'},
      	 {id: '5'},
      	 {id: '6'},
      	 {id: '7'},
      	 {id: '8'},
      	 {id: '9'},
       	 {id: '10'},
      	 {id: '11'},
      	 {id: '12'},
      	 {id: '13'},
      	 {id: '14'},
      	 {id: '15'},
      	 {id: '16'},
     	 {id: '17'},
     	 {id: '18'},
     	 {id: '19'},
     	 {id: '20'},
     	 {id: '21'},
      	 {id: '22'},
     	 {id: '23'},
     	 {id: '24'},
     	 ]);
	},
});