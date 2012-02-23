Ext.define('App.store.EditRequest', {
	extend: 'Ext.data.Store',
	requires: [ 'App.model.EditRequest' ],
	config: {
	    model: 'App.model.EditRequest',
	    proxy: "ajax",
	}
});