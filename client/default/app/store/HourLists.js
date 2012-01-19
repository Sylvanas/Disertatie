Ext.define('App.store.HourListsStart', {
    extend: 'Ext.data.Store',
    requires: 'App.model.HourList',
    model: 'App.model.Languages',
    sorters : 'id',
    data : [
       	 {id: '1', name: 'English'},
       	 {id: '2', name: 'Română'},
       	 {id: '3', name: 'Deutsch'},
       	 ],
    autoLoad: true
});

Ext.define('App.store.HourListsEnd', {
    extend: 'Ext.data.Store',
    requires: 'App.model.HourList',
    model: 'App.model.Languages',
    sorters : 'id',
    data : [
       	 {id: '1', name: 'English'},
       	 {id: '2', name: 'Română'},
       	 {id: '3', name: 'Deutsch'},
       	 ],
    autoLoad: true
});
