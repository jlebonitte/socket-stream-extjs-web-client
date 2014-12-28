Ext.define('WebClient.view.StockView', {
    extend: 'Ext.panel.Panel',
    alias: 'stock-view',
    xtype: 'stock-view',
    controller: 'stock',

    layout: 'border',

    requires: [
        'Ext.layout.container.Border',
        'WebClient.controller.Stock'
    ],

    //TODO: Need to handle resize event and fix size with bootstrap properly...
    height: window.innerHeight - 100,
    width: window.innerWidth - 25,

    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 10
    },

    items: [
        {
            title: 'Stock Form',
            region: 'west',
            floatable: false,
            margin: '5 0 0 0',
            width: 125,
            minWidth: 100,
            maxWidth: 250,
            html: '<p>This is where they will pick their stocks asdfasdf</p>'
        },
        {
            title: 'Main Content',
            collapsible: false,
            region: 'center',
            margin: '5 0 0 0',
            html: '<h2>This will contain a P/F chart and Grid</p>'
        }
    ]
});