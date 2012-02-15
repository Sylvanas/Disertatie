Ext.define('App.store.LocalStore', {
	extend: 'Ext.data.Store',
	requires: [ 'App.model.LocalStore' ],
	config: { 
	    model: 'App.model.LocalStore',
	    autoLoad: true
        //autoSync : true,
	    //autoLoad: true, //why does this crash? - "You are using a ServerProxy but have not supplied it with a url."
	    //storeID: "aaaLocalStore",
	}
});
