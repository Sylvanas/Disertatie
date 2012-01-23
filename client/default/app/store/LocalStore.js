Ext.define('App.store.LocalStore', {
    extend: 'Ext.data.Store',
    requires: 'App.model.LocalStore',
    model: 'App.model.LocalStore',
    data: [],
    sorters : [{
    	 property : 'id',
    	 direction: 'DESC'
    	 }],
    autoSync : true,
    autoLoad: true,
    storeID: "aaaLocalStore",
});
