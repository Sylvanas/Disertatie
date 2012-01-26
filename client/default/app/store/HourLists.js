Ext.define('App.store.HourListStart', {
	extend: 'Ext.data.Store',
	requires: [ 'App.model.HourList' ],
	config: { 
	    
	    model: 'App.model.HourList',
	    sorters : 'id',
	    data: [],
	    proxy: "ajax",
	}
});

Ext.define('App.store.HourListEnd', {
	extend: 'Ext.data.Store',
	requires: [ 'App.model.HourList' ],
	config: {
	    model: 'App.model.HourList',
	    sorters : 'id',
	    data: [],
	    proxy: "ajax",
	}
});
