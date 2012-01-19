Ext.define('App.model.Login', {
    extend: 'Ext.data.Model',
    fields: [
             {name: 'id', type: 'string'},
             {name: 'email', type: 'string'},
             {name: 'password',  type: 'string'},
             ],
    idProperty: "id",
  /*  proxy: {
        type: 'localstorage',
        id: 'loginStore'
    },*/
});