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
				App.Global.getCloudRequests();
				}
			},
			
			'#EditRequestViewApproveButton': { 'tap': function () {
					var recordToSend = this.getRecordFromForm();
					recordToSend.approved = true;
					recordToSend.currentID = Ext.getStore('LocalStore').getAt(0).get('accountID');
					this.sendDataToCloud(Ext.getStore('LocalStore').getAt(0).get('accountID'), recordToSend);
				}
			},

			'#EditRequestViewSaveButton': { 'tap': function () {			
					var recordToSend = this.getRecordFromForm();
					recordToSend.currentID = Ext.getStore('LocalStore').getAt(0).get('accountID');
					this.sendDataToCloud(Ext.getStore('LocalStore').getAt(0).get('accountID'), recordToSend);
				}
			},

			'#ManageRequestsViewList': { 'disclose': function (comp, currentRecord,  target,  index,  e,  eOpts) {
					Ext.getStore('EditRequest').removeAll();
					this.getRecordInfo(Ext.getStore('LocalStore').getAt(0).get('accountID'), currentRecord.get('id'));
				}
			},
		});
    },
    
    initialize: function() {
    },
    
    getRecordInfo: function(senderID, targetID) {
    	if(App.Global.releaseCode){
    		$fh.act({
    	  	      act : 'CloudGetRequestInfo',
    	  	      req : {
    	  	    	  senderID : senderID,
    	  	    	  targetID : targetID
    	  	      }
    	  	    }, function(res) {
		  	    	if(res.message == 'ok'){
		  	    		handleServerResponse(res.info);
			    	}else if (res.message == 'fail') {
			    		Ext.Msg.alert('User not found', "There is a problem with the server.");
	                  } else if (res.message == 'error') {
	                	  Ext.Msg.alert('Friend not found', "There is a problem with the server.");
	                  } else {
	                	  Ext.Msg.alert('Connection problem', "The connection with the server could not be established. Please check your internet connection.");
	                  }  	    		  	    	
				}, function (code, errorprops, params) {
    	  	    	Ext.Msg.alert('Connection Problems', 'Server problems. Please verify your internet connection, or try again later.', Ext.emptyFn);
    	  	    });
    	}else{
    		var result = {id: 'sdrf3434d345d4sdf3', name: 'Spencer', approved: true, ignoreAlerts: true};handleServerResponse(result);
        	return;
    	}
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

    sendDataToCloud: function(senderID, request) {
    	if(App.Global.releaseCode){
			$fh.act({
		  	      act : 'CloudEditRequest',
		  	      req : {
		  	        senderID : senderID,
		  	        request : request
		  	      }
		  	    }, function(res) {
		  	    	if(res.message == 'ok'){
		  	    		App.Global.getCloudRequests();
			    	}else if (res.message == 'fail') {
			    		Ext.Msg.alert('Server problem', "Server problem.");
	                  } else {
	                	  Ext.Msg.alert('Connection problem', "The connection with the server could not be established. Please check your internet connection.");
	                  }  	    		  	    	
				}, function (code, errorprops, params) {
		    	    	Ext.Msg.alert('Connection Problems', 'Server problems. Please verify your internet connection, or try again later.', Ext.emptyFn);
		    	    });	
		    	}else{
		    		App.Global.changeView(App.view.ManageRequestsView.xtype);
		    	}
    },

	onLaunch: function() {
	}	
});

function handleServerResponse(result){
	var editRequestStore = Ext.getStore('EditRequest');
	editRequestStore.setData(result);
	setFormPanel(result);
	App.Global.changeView(App.view.EditRequestView.xtype);
}

function setFormPanel(result){
	var formPanel = Ext.getCmp('EditRequestViewFormPanel');
	formPanel.setValues({
		id: result.id,
		name: result.name,
		approved: result.approved,
		ignoreAlerts: result.ignoreAlerts
	});
	Ext.getCmp('EditRequestViewApprovedField').setDisabled(result.approved);
	Ext.getCmp('EditRequestViewApproveButton').setDisabled(result.approved);
}