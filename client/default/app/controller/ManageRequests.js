Ext.define('App.controller.ManageRequests', {
    extend: 'Ext.app.Controller',	
    views: ['ManageRequestsView'],
    stores: ['Requests'],
    init: function() {
		this.control({
			'#ManageRequestsViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.AccountView.xtype);
				}
			},
			
			'#ManageRequestsViewList': { 'disclose': function (currentRecord,  target,  index,  e,  eOpts) {
				var editRequestStore = Ext.getStore('EditRequest');
				App.Global.clearStore(editRequestStore);
				var record = this.getRecordInfo(currentRecord.get('id'));
				editRequestStore.add({ id: record['id'], name: record['name'],  approved: record['approved'], ignoreAlerts: record['ignoreAlerts']});
				this.getController('EditRequest').initialize(editRequestStore.getAt(0));
				App.Global.changeView(App.view.EditRequestView.xtype);
				}
			},
		});
    },
    
    getRecordInfo: function(id) {
    	//call cloud function
    	return {id: 'sdrf3434d345d4sdf3', name: 'Spencer', approved: false, ignoreAlerts: true};
    },

	onLaunch: function() {
	}	
});