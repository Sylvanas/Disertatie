Ext.define('App.view.LoadingView', {
    extend: 'Ext.Panel',
    title: "Loading View",
    alias: "widget.LoadingView",
    config: {
    	cls: 'loadingView'
	},
	initialize: function() {
		this.callParent();
	}
});