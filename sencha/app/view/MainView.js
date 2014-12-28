Ext.define('WebClient.view.MainView', {
    extend: 'Ext.tab.Panel',
    alias: 'main-view',
    xtype: 'main-view',
    controller: 'main',
    height: '100%',
    width: '100%',

    layout: 'fit',

    requires: [
        'Ext.layout.container.Border',
        'WebClient.controller.Main',
        'WebClient.view.DashboardView',
        'WebClient.view.StockView'
    ],

    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 10
    },

    items: [
        {
            title: 'Dashboard',
            xtype: 'dashboard-view'
        },
        {
            title: 'Stock View',
            xtype: 'stock-view'
        }
    ]
});