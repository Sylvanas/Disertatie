Ext.define('App.model.Map', {
    extend: 'Ext.data.Model',
    config: {
	    fields: [
	             {name: 'id'},
	             {name: 'latitude',  type: 'string'},
	             {name: 'longitude',  type: 'string'},
	             {name: 'time',  type: 'int'},
	             ],
	    idProperty: "id",
    }
});