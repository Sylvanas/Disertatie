Ext.define('App.store.Map', {
	extend: 'Ext.data.Store',
	requires: [ 'App.model.Map' ],
	config: {  
	    model: 'App.model.Map',
	    sorters : 'index',
	    data : [
	       	 {id: '123',    index: '0', latitude: '53.340342', longitude: '-6.24312', time: '12.05.2011 12.20'},
	         {id: '232',    index: '1', latitude: '53.240342', longitude: '-6.14312', time: '12.05.2011 12.18'},
	         {id: '1',    index: '2', latitude: '53.140342', longitude: '-6.24312', time: '12.05.2011 12.16'},
	         {id: '12343r234',    index: '3', latitude: '53.140342', longitude: '-6.14312', time: '12.05.2011 12.14'},
	       	 ],
	    proxy: "ajax",
	    //autoLoad: true,
	}
});
