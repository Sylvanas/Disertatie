Ext.define('App.store.LocalStore', {
    extend: 'Ext.data.Store',
    requires: 'App.model.LocalStore',
    model: 'App.model.LocalStore',
    sorters : 'id',
    autoLoad: true
});
