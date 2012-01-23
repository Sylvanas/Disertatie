Ext.define('App.controller.EditRequest', {
    extend: 'Ext.app.Controller',	
    views: ['EditRequestView'],
    stores: ['EditRequest'],
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
		});
    },
    
    initialize: function(record) {
    	this.setFormPanel(record);
    	var approveField = Ext.getCmp('EditRequestViewApprovedField');   	
    	approveField.setDisabled(record.get('approved'));
    },
    
    setFormPanel: function(record) {
    	var formPanel = Ext.getCmp('EditRequestViewFormPanel');
    	formPanel.load(record);
    },
    
    sendDataToCloud: function(data) {
    	//call cloud function
    },

	onLaunch: function() {
	}	
});