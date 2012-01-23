Ext.define('App.store.EditRequest', {
    extend: 'Ext.data.Store',
    requires: 'App.model.EditRequest',
    model: 'App.model.EditRequest',
    sorters : 'id',
    data : [{id: 'Ed',    name: 'Spencer', approved: false,    ignoreAlerts: true}],
});
