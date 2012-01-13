Ext.define('App.model.LocalStore', {
    extend: 'Ext.data.Model',
    fields: [
             {name: 'id', type: 'string'},
             {name: 'language',  type: 'string'},
             {name: 'email',  type: 'string'},
             {name: 'password',  type: 'string'},
             {name: 'soundVolume',  type: 'string'},
             ],
    idProperty: "id",
});