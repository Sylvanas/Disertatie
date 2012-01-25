Ext.define('App.model.LocalStore', {
    extend: 'Ext.data.Model',
    config: {
	    fields: [{name: 'id', type: 'string'},
	             {name: 'language',  type: 'string'},
	             {name: 'accountID',  type: 'string'},
	             {name: 'email',  type: 'string'},
	             {name: 'password',  type: 'string'},
	             {name: 'soundVolume',  type: 'string'},
	             {name: 'startHour', type: 'string'},
	             {name: 'endHour', type: 'string'},
	             {name: 'alertHours', type: 'Boolean'},
	             {name: 'overrideIndividualAlerts', type: 'Boolean'},
	             ],
	    idProperty: "id",
	    proxy: {
	        type: 'localstorage',
	        id: 'appLocalStore'
	    },
    }
});