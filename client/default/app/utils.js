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
		var localStore = Ext.getStore('LocalStore');
		var hourListStartStore = Ext.getStore('HourListStart');
		var hourListEndStore = Ext.getStore('HourListEnd');
		if(hourListStartStore.getCount()==24){
			hourListStartStore.removeAt(localStore.getAt(0).get('startHour') - 1);
		}
		if(hourListEndStore.getCount()==24){
			hourListEndStore.removeAt(localStore.getAt(0).get('endHour') - 1);
		}
	},
	
	refreshHourList: function (activeStore, inactiveStore, activeStoreValue, inactiveStoreValue, newValue) {
		activeStore.removeAt(activeStoreValue - 1);
		activeStore.add(newValue);
	},
    
});