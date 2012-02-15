Ext.define('App.store.LocalStore', {
	extend: 'Ext.data.Store',
	requires: [ 'App.model.LocalStore' ],
	config: { 
	    model: 'App.model.LocalStore',
	    autoLoad: true,
        autoSync : true,
	}
});
