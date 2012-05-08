Ext.define('App.model.SelectFriend', {
    extend: 'Ext.data.Model',
    config: {
	    fields: [
	             {name: 'id', type: 'string'},
	             {name: 'name',  type: 'string'},
	             {name: 'inArea',  type: 'boolean'}
	             ],
	    idProperty: "id",
    }
});