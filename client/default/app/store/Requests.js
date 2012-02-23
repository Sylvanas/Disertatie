Ext.define('App.store.Requests', {
	extend: 'Ext.data.Store',
	requires: [ 'App.model.Requests' ],
	config: {  
	    model: 'App.model.Requests',
	    sorters : 'id',
	    //proxy: "ajax",
	}
});
