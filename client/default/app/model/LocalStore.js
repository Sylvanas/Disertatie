Ext.define('App.model.LocalStore', {
    extend: 'Ext.data.Model',
    config: {
	    fields: [{name: 'id'},
	             {name: 'language',  type: 'string'},
	             {name: 'accountID',  type: 'string'},
	             {name: 'email',  type: 'string'},
	             {name: 'password',  type: 'string'},
	             {name: 'soundVolume',  type: 'int'},
	             {name: 'alertStatus',  type: 'Boolean'},
	             {name: 'startHour', type: 'string'},
	             {name: 'endHour', type: 'string'},
	             {name: 'alertHours', type: 'Boolean'},
	             {name: 'overrideIndividualAlerts', type: 'Boolean'},
	             ],
	   /* proxy: {
	        type: 'localstorage',
	        id: 'appLocalStore3'
	    }*/
    }
});