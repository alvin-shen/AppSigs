/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('AppSigs.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        // 'AppSigs.view.main.MainController',
        // 'AppSigs.view.main.MainModel',
        'AppSigs.view.signature.Signature'
    ],

    xtype: 'app-main',
    
    // controller: 'main',
    // viewModel: {
    //     type: 'main'
    // },

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [{
        xtype: 'panel',
        title: 'Application Control',
        id: 'west-panel',
        width: 250
    }, {
        xtype: 'signature',
        flex: 1
    }]
});
