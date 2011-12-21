Ext.define('App.store.SelectFriend', {
    extend: 'Ext.data.Store',
    requires: 'App.model.SelectFriend',
    model: 'App.model.SelectFriend',
    sorters : 'id',
    data : [
       	 {id: 'Ed',    name: 'Spencer'},
       	 {id: 'Tommy', name: 'Maintz'},
       	 {id: 'Aaron', name: 'Conran'},
       	 {id: 'Jamie', name: 'Avins1'}
       	 ],
    autoLoad: true
});
