Ext.define('App.controller.EditRequest', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            'viewport': 'EditRequestView',
            'viewport': 'ManageRequestsView',
            'store': 'EditRequest',
        },
    },
    init: function() {
		this.control({
			'#EditRequestViewBackButton': { 'tap': function () {
				App.Global.changeView(App.view.ManageRequestsView.xtype);
				}
			},
			
			'#EditRequestViewApproveButton': { 'tap': function () {
				App.Global.changeView(App.view.ManageRequestsView.xtype);
				var formPanel = Ext.getCmp('EditRequestViewFormPanel');
				this.sendDataToCloud({
					username:  "asdf",
					password: "asdf",
					id: formPanel.getComponent(0).getValue(),
					name: formPanel.getComponent(1).getValue(), 
					approved: formPanel.getComponent(2).getValue(), 
					ignoreAlerts: formPanel.getComponent(3).getValue(),
				});
				}
			},
			
			'#ManageRequestsViewList': { 'disclose': function (comp, currentRecord,  target,  index,  e,  eOpts) {
				var editRequestStore = Ext.getStore('EditRequest');
				App.Global.clearStore(editRequestStore);
				var record = this.getRecordInfo(currentRecord.get('id'));
				editRequestStore.add({ id: record['id'], name: record['name'], approved: record['approved'], ignoreAlerts: record['ignoreAlerts']});
				this.initialize(editRequestStore.getAt(0));
				App.Global.changeView(App.view.EditRequestView.xtype);
				}
			},
		});
    },
    
    initialize: function(record) {
    	this.setFormPanel(record);
    },
    
    getRecordInfo: function(id) {
    	//call cloud function
    	return {id: 'sdrf3434d345d4sdf3', name: 'Spencer', approved: false, ignoreAlerts: true};
    },
    
    setFormPanel: function(record) {
    	var formPanel = Ext.getCmp('EditRequestViewFormPanel');
    	formPanel.setValues({
    		id: record.get('id'),
    		name: record.get('name'),
    		approved: record.get('approved'),
    		ignoreAlerts: record.get('ignoreAlerts')
    	});
    },
    
    sendDataToCloud: function(data) {
    	//call cloud function
    },

	onLaunch: function() {
	}	
});