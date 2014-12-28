Ext.application({
    name: 'WebClient',

    views: [
        'Viewport'
    ],

    launch: function(app){
        Ext.create('WebClient.view.Viewport');
    }

});
