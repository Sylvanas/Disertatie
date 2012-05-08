Ext.define('App.view.SelectFriendView', {
    extend: 'Ext.Panel',
    title: "SelectFriend View",
    alias: "widget.SelectFriendView",
      config: {
      layout: { type: 'vbox', align: 'stretch' },
    items: [
        {
          xtype : 'toolbar',
          ui: 'light',
          title: '',
          layout: { pack: 'center' },
          items : [ {
	                  xtype: 'button',
	                  text: 'Back',
	                  id: 'SelectFriendViewBackButton',
	                  ui: 'back',
	                }, { xtype: 'spacer'} ]
        },
        {
          xtype: 'list',
                  store: 'SelectFriend',
                  id: 'SelectFriendViewList',
                  flex: 1,
                  disableSelection: true,
                  onItemDisclosure: function(record, btn, index) {
                  },
                  itemTpl: '<table>'+
                  '<tpl for="."">'+
	                  '<tpl  if="inArea == false">'+
	                    '<tr>'+
	                        '<td>'+
	                            //'<img class="notification_icon" src="./resources/img/notApproved.png">'+
	                        '</td>'+
	                        '<td width="100%">'+
	                            '<span>{name}</span><br/>'+
	                        '</td>'+
	                    '</tr>'+
	                    '</tpl>'+
	                    '<tpl  if="inArea == true">'+
	                    '<tr>'+
	                        '<td>'+
	                            //'<img class="notification_icon" src="./resources/img/approved.png">'+
	                        '</td>'+
	                        '<td width="100%">'+
	                            '<span style="color:green">{name}</span><br/>'+
	                        '</td>'+
	                    '</tr>'+
	                    '</tpl>'+
                    '</tpl>'+
                '</table>'
            }
    ]
  },
  initialize: function() {  
    this.callParent();
  }
});