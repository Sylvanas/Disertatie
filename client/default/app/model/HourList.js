Ext.define('App.model.HourList', {
    extend: 'Ext.data.Model',
    config: {
	    fields: [{name: 'id', type: 'int'}],
	    idProperty: "id",
    }
});