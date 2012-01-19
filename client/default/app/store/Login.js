Ext.define('App.store.Login', {
    extend: 'Ext.data.Store',
    requires: 'App.model.Login',
    model: 'App.model.Login',
    sorters : 'email',   
});
