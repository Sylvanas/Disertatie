Ext.define('App.model.Requests', {
    extend: 'Ext.data.Model',
    fields: [
             {name: 'id', type: 'string'},
             {name: 'name',  type: 'string'}
             ],
    idProperty: "id",
});