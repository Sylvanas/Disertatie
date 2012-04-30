Ext.define('App.model.Map', {
    extend: 'Ext.data.Model',
    config: {
	    fields: [
	             {name: 'id', type: 'string'},
	             {name: 'latitude',  type: 'string'},
	             {name: 'longitude',  type: 'string'},
	             {name: 'time',  type: 'date'},
	             ],
	    idProperty: "id",
    }
});