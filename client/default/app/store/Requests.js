Ext.define('App.store.Requests', {
    extend: 'Ext.data.Store',
    requires: 'App.model.Requests',
    model: 'App.model.Requests',
    sorters : 'id',
    data : [
       	 {id: 'Ed',    name: 'Spencer'},
       	 {id: 'Tommy', name: 'Maintz'},
       	 {id: 'Aaron', name: 'Conran'},
       	 {id: 'Jamie', name: 'Avins1'}
       	 ],
    autoLoad: true
});
