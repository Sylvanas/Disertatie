Ext.define('App.store.EditRequest', {
	extend: 'Ext.data.Store',
	requires: [ 'App.model.EditRequest' ],
	config: {
	    model: 'App.model.EditRequest',
	    //sorters : 'id',
	    data : [{id: 'Ed', name: 'Spencer', approved: false, ignoreAlerts: true}],
	    proxy: "ajax",
	}
	    /*config: {
        proxy: {
            type: 'memory',
            reader: 'array'
        }
    },*/
});

/*Ext.define('DataSink.store.BaseContacts', {
extend: 'Ext.data.Store',
requires: ['DataSink.model.Contact'], // @bug if you remove this, the model config below will not try and load it

config: {
    model: 'DataSink.model.Contact',

    data: CONTACTS,

    proxy: "ajax" // @bug you shouldn't always need a proxy...
}
});*/

/*Ext.define('Mail.store.Messages', {
    extend: 'Ext.data.Store',
    alias: 'store.Messages',
    
    requires: ['Ext.ux.Faker'],
    
    constructor: function() {
        console.log('creating store');
        var data  = [],
            count = 50,
            faker = Ext.create('Ext.ux.Faker'),
            i;
        
        for (i = 0; i < count; i++) {
            data[i] = {
                id: i + 1,
                subject: faker.subject(),
                fromEmail: faker.email(),
                fromName: faker.name(),
                body: faker.lorem(Math.ceil(Math.random() * 3)),
                sentAt: '19 November 2011 15:46'
            };
        }
        
        Ext.apply(this, {
            storeId: 'Messages',
            
            model: 'Mail.model.Message',
            defaultRootProperty: 'items',
            rootVisible: false,
            
            data: data
        });
        
        this.callParent(arguments);
    }
}); */