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
					recordToSend.currentID = App.Global.getLocalValue('accountID');
					this.sendDataToCloud(App.Global.getLocalValue('accountID'), recordToSend);
				}
			},

			'#EditRequestViewSaveButton': { 'tap': function () {			
					var recordToSend = this.getRecordFromForm();
					recordToSend.currentID = App.Global.getLocalValue('accountID');
					this.sendDataToCloud(App.Global.getLocalValue('accountID'), recordToSend);
				}
			},

			'#ManageRequestsViewList': { 'disclose': function (comp, currentRecord,  target,  index,  e,  eOpts) {
					Ext.getStore('EditRequest').removeAll();
					this.getRecordInfo(App.Global.getLocalValue('accountID'), currentRecord.get('id'));
				}
			},
			
			'#ManageRequestsViewList': { 'itemtap': function (list, index, target, currentRecord) {
				Ext.getStore('EditRequest').removeAll();
				this.getRecordInfo(App.Global.getLocalValue('accountID'), currentRecord.get('id'));
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
			    		alert("There is a problem with the server.");
	                  } else if (res.message == 'error') {
	                	  alert("There is a problem with the server.");
	                  } else {
	                	  alert("The connection with the server could not be established. Please check your internet connection.");
	                  }  	    		  	    	
				}, function (code, errorprops, params) {
    	  	    	alert('Server problems. Please verify your internet connection, or try again later.', Ext.emptyFn);
    	  	    });
    	}else{
    		var result = {id: '4f91037a96efdd3971020626', name: '4f91037a96efdd3971020626', approved: 'true', ignoreAlerts: 'false'};handleServerResponse(result);
        	return;
    	}
    },
    
    getRecordFromForm: function(){		
		return {id: Ext.getCmp('EditRequestViewId').getValue(),
			    name: Ext.getCmp('EditRequestViewName').getValue(),
			    approved: Ext.getCmp('EditRequestViewApprovedField').getValue(),
			    ignoreAlerts: Ext.getCmp('EditRequestViewIgnoreAlerts').getValue()};
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
	Ext.getCmp('EditRequestViewId').setValue(result.id);
	Ext.getCmp('EditRequestViewName').setValue(result.name);
	Ext.getCmp('EditRequestViewApprovedField').setChecked(result.approved);
	Ext.getCmp('EditRequestViewIgnoreAlerts').setChecked(result.ignoreAlerts);
	Ext.getCmp('EditRequestViewApproveButton').setDisabled(result.approved);
}