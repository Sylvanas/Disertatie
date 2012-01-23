<<<<<<< HEAD
﻿Ext.define('App.store.HourListStart', {
=======
Ext.define('App.store.HourListsStart', {
>>>>>>> parent of 57e55a1... made more changes to SoundAlertView. Continued the implementation of the localStore. Implemented logic for logout button.
    extend: 'Ext.data.Store',
    requires: 'App.model.HourList',
    model: 'App.model.Languages',
    sorters : 'id',
<<<<<<< HEAD
    data: [],
=======
    data : [
       	 {id: '1', name: 'English'},
       	 {id: '2', name: 'Română'},
       	 {id: '3', name: 'Deutsch'},
       	 ],
    autoLoad: true
>>>>>>> parent of 57e55a1... made more changes to SoundAlertView. Continued the implementation of the localStore. Implemented logic for logout button.
});

Ext.define('App.store.HourListsEnd', {
    extend: 'Ext.data.Store',
    requires: 'App.model.HourList',
    model: 'App.model.Languages',
    sorters : 'id',
<<<<<<< HEAD
    data: [],
=======
    data : [
       	 {id: '1', name: 'English'},
       	 {id: '2', name: 'Română'},
       	 {id: '3', name: 'Deutsch'},
       	 ],
    autoLoad: true
>>>>>>> parent of 57e55a1... made more changes to SoundAlertView. Continued the implementation of the localStore. Implemented logic for logout button.
});
