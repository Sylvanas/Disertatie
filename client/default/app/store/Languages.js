Ext.define('App.store.Languages', {
	extend: 'Ext.data.Store',
	requires: [ 'App.model.Languages' ],
	config: { 
	    model: 'App.model.Languages',
	    sorters : 'id',
	    data : [
	       	 {id: '1', name: 'English'},
	       	 {id: '2', name: 'Română'},
	       	 {id: '3', name: 'Deutsch'},
	       	 ],
	   	proxy: "ajax",
	    //autoLoad: true
	}
});
