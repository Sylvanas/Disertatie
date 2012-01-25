Ext.define('App.model.EditRequest', {
    extend: 'Ext.data.Model',
    config: {
	    fields: [
	             {name: 'id', type: 'string'},
	             {name: 'name',  type: 'string'},
	             {name: 'approved',  type: 'boolean'},
	             {name: 'ignoreAlerts',  type: 'boolean'}
	             ],
	    idProperty: "id",
    }
});