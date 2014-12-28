Ext.define('WebClient.view.Viewport', {
    extend: 'Ext.container.Container',
    renderTo: Ext.get('viewport'),
    layout: 'anchor',
    requires: ['WebClient.view.MainView'],

    items: [
        {
            xtype: 'main-view'
        }
    ]

});