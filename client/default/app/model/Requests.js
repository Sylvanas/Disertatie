Ext.define('App.model.Requests', {
    extend: 'Ext.data.Model',
    config: {
	    fields: [
	             {name: 'id', type: 'string'},
	             {name: 'name',  type: 'string'},
	             {name: 'approved',  type: 'boolean'},
	             ],
	    idProperty: "id",
    }
});