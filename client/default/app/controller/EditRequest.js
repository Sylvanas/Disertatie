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
					var recordToSend = this.getRecordFromForm();
					recordToSend.approved = true;
					recordToSend.currentID = Ext.getStore('LocalStore').getAt(0).get('accountID');
					this.sendDataToCloud(recordToSend);
				}
			},
			
			'#EditRequestViewSaveButton': { 'tap': function () {
				App.Global.changeView(App.view.ManageRequestsView.xtype);
				var recordToSend = this.getRecordFromForm();
				recordToSend.currentID = Ext.getStore('LocalStore').getAt(0).get('accountID');
				this.sendDataToCloud(recordToSend);
			}
		},
			
			'#ManageRequestsViewList': { 'disclose': function (comp, currentRecord,  target,  index,  e,  eOpts) {
					Ext.getStore('EditRequest').removeAll();
					this.getRecordInfo(currentRecord.get('id'));
				}
			},
		});
    },
    
    initialize: function(result) {
    	this.setFormPanel(result);
    },
    
    getRecordInfo: function(id) {
    	var result = {id: 'sdrf3434d345d4sdf3', name: 'Spencer', approved: true, ignoreAlerts: true};this.handleServerResponse(result);
    	return;
    	$fh.act({
  	      act : 'GetRecordInfo',
  	      req : {
  	    	  accountID : id,
  	      }
  	    }, function(res) {
  	    	this.handleServerResponse(res);
  	    }, function (code, errorprops, params) {
  	    	Ext.Msg.alert('Connection Problems', 'Server problems. Please verify your internet connection, or try again later.', Ext.emptyFn);
  	    });
    },
    
    handleServerResponse: function(result){
    	var editRequestStore = Ext.getStore('EditRequest');
    	editRequestStore.setData(result);
    	this.initialize(result);
    	App.Global.changeView(App.view.EditRequestView.xtype);
    },
    
    setFormPanel: function(result) {
    	var formPanel = Ext.getCmp('EditRequestViewFormPanel');
    	formPanel.setValues({
    		id: result.id,
    		name: result.name,
    		approved: result.approved,
    		ignoreAlerts: result.ignoreAlerts
    	});
    	Ext.getCmp('EditRequestViewApprovedField').setDisabled(result.approved);
		Ext.getCmp('EditRequestViewApproveButton').setDisabled(result.approved);
    },
    
    getRecordFromForm: function(){
    	var formValues =  Ext.getCmp('EditRequestViewFormPanel').getValues();
    	if(formValues.approved != true){
    		formValues.approved = false;
    	}
    	if(formValues.ignoreAlerts != true){
    		formValues.ignoreAlerts = false;
    	}
    	return formValues;
    },

    sendDataToCloud: function(request) {
    	return;
    	$fh.act({
    	      act : 'EditRequest',
    	      req : {
    	    	  request : request,
    	      }
    	    }, function(res) { 
    	    	App.Global.changeView(App.view.ManageRequestsView.xtype);
    	    }, function (code, errorprops, params) {
    	    	Ext.Msg.alert('Connection Problems', 'Server problems. Please verify your internet connection, or try again later.', Ext.emptyFn);
    	    });
    },

	onLaunch: function() {
	}	
});