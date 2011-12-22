Ext.define('Contact', {
   extend: 'Ext.data.Model',
   fields: ['firstName', 'lastName']
});

var store = Ext.create('Ext.data.Store', {
   model: 'Contact',
   sorters: 'lastName',

   getGroupString: function(record) {
       return record.get('lastName')[0];
   },

   data: [
       {firstName: 'Tommy',   lastName: 'Maintz'},
       {firstName: 'Rob',     lastName: 'Dougan'},
       {firstName: 'Ed',      lastName: 'Spencer'},
       {firstName: 'Jamie',   lastName: 'Avins'},
       {firstName: 'Aaron',   lastName: 'Conran'},
       {firstName: 'Dave',    lastName: 'Kaneda'},
       {firstName: 'Jacky',   lastName: 'Nguyen'},
       {firstName: 'Abraham', lastName: 'Elias'},
       {firstName: 'Jay',     lastName: 'Robinson'},
       {firstName: 'Nigel',   lastName: 'White'},
       {firstName: 'Don',     lastName: 'Griffin'},
       {firstName: 'Nico',    lastName: 'Ferrero'},
       {firstName: 'Nicolas', lastName: 'Belmonte'},
       {firstName: 'Jason',   lastName: 'Johnston'}
   ]
});

Ext.define('App.view.SelectFriendView', {
    extend: 'Ext.Panel',
    title: "SelectFriend View",
    alias: "widget.SelectFriendView",
      config: {
      layout: { type: 'vbox', align: 'stretch' },
    items: [
        {
          xtype : 'toolbar',
          ui: 'light',
          title: '',
          layout: { pack: 'center' },
          items : [ 
                {
                  xtype : 'button',
                  text: 'Back',
                  id: 'SelectFriendViewBackButton',
                  ui: 'back',
                },
                   ]
        },
        {
          xtype: 'list',
                  store: 'SelectFriend',
                  id: 'SelectFriendViewList',
                  flex: 1,
                  onItemDisclosure: function(record, btn, index) {
                  },
                  itemTpl: '<div class="contact"><strong>{name}</strong></div>'
            }
    ]
  },
  initialize: function() {  
    this.callParent();
  }
});