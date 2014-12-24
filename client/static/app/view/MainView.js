Ext.define('WebClient.view.MainView', {
    extend: 'Ext.panel.Panel',

    alias: 'main-view',
    xtype: 'main-view',
    controller: 'main',

    layout: 'border',
    requires: [
        'Ext.layout.container.Border',
        'WebClient.controller.Main'
    ],

    //TODO: Need to handle resize event and fix size with bootstrap properly...
    height: window.innerHeight-50,
    width: window.innerWidth,

    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 10
    },

    items: [
        {
            title: 'Stock Form',
            region:'west',
            floatable: false,
            margin: '5 0 0 0',
            width: 125,
            minWidth: 100,
            maxWidth: 250,
            html: '<p>This is where they will pick their stocks</p>'
        },
        {
            title: 'Main Content',
            collapsible: false,
            region: 'center',
            margin: '5 0 0 0',
            html: '<h2>Main Page</h2><p>This is where the main content would go</p>'
        }
    ]
});