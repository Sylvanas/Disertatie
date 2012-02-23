Ext.define('App.store.SelectFriend', {
	extend: 'Ext.data.Store',
	requires: [ 'App.model.SelectFriend' ],
	config: {
	    model: 'App.model.SelectFriend',
	    sorters : 'name',
	    //proxy: "ajax",
	}
});
