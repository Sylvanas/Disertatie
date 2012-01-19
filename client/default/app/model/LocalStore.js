Ext.define('App.model.LocalStore', {
    extend: 'Ext.data.Model',
    fields: [{name: 'id', type: 'string'},
             {name: 'language',  type: 'string'},
             {name: 'email',  type: 'string'},
             {name: 'password',  type: 'string'},
             {name: 'soundVolume',  type: 'string'},
             {name: 'startHour', type: 'string'},
             {name: 'endHour', type: 'string'},
             ],
    idProperty: "id",
    proxy: {
        type: 'localstorage',
        id: 'appLocalStore'
    },
});