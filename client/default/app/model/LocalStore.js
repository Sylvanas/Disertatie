Ext.define('App.model.LocalStore', {
    extend: 'Ext.data.Model',
    fields: [
             {name: 'id', type: 'string'},
             {name: 'language',  type: 'string'},
             {name: 'accountID',  type: 'string'},
             {name: 'email',  type: 'string'},
             {name: 'password',  type: 'string'},
             {name: 'soundVolume',  type: 'string'},
<<<<<<< HEAD
             {name: 'startHour', type: 'string'},
             {name: 'endHour', type: 'string'},
             {name: 'alertHours', type: 'Boolean'},
             {name: 'overrideIndividualAlerts', type: 'Boolean'},
=======
>>>>>>> parent of 57e55a1... made more changes to SoundAlertView. Continued the implementation of the localStore. Implemented logic for logout button.
             ],
    idProperty: "id",
});