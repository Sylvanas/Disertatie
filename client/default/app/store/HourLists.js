Ext.define('App.store.HourListStart', {
    extend: 'Ext.data.Store',
    requires: 'App.model.HourList',
    model: 'App.model.HourList',
    sorters : 'id',
    data: [],
    autoLoad: true
});

Ext.define('App.store.HourListEnd', {
    extend: 'Ext.data.Store',
    requires: 'App.model.HourList',
    model: 'App.model.HourList',
    sorters : 'id',
    data: [],
    autoLoad: true
});
