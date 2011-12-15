Ext.define('App.view.MapView', {
    extend: 'Ext.Panel',
    title: "Map View",
    alias: "widget.MapView",
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
									id: 'MapViewBackButton',
									ui: 'back',
								}
					         ]
				},
				{
				    xtype: 'map',
				    flex: '1',
				    id: 'applicationMap',
				    useCurrentLocation: false,
					mapOptions : {
						center : new google.maps.LatLng(0, 0),
						zoom : 14,
						mapTypeId : google.maps.MapTypeId.ROADMAP,
						navigationControl: true,
						navigationControlOptions: {style: google.maps.NavigationControlStyle.DEFAULT}
					},
				    listeners : {
	                	el: {
							drag: { fn: function() { event.cancelBubble = true; } }
						},
		                maprender : function(comp, map) {
		                }
	
		            }
				},
		]
	},
	initialize: function() {	
		this.callParent();
	       
        // FIX: Rendering Problem von Sencha Touch 2.0.0-pr1
        var map = Ext.getCmp('applicationMap').map;
        this.on({
            show: function(){
                google.maps.event.trigger(map, 'resize');
                map.panTo(new google.maps.LatLng(50.71462, 12.496889));
            }
        });
        // FIX: Rendering Problem von Sencha Touch 2.0.0-pr1
	}
});