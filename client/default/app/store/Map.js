Ext.define('App.store.Map', {
	extend: 'Ext.data.Store',
	requires: [ 'App.model.Map' ],
	config: {  
	    model: 'App.model.Map',
	    sorters : 'index',
	    proxy: "ajax",
	}
});
