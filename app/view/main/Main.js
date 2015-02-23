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
        'AppSigs.view.signature.Signature',
        'AppSigs.view.main.MainController'
    ],
    controller: 'main',
    xtype: 'app-main',

    // layout: {
    //     type: 'hbox',
    //     align: 'stretch'
    // },

    layout: 'border',

    items: [
    {
        xtype: 'panel',
        region: 'west',
        title: 'Application Details',
        id: 'west-panel',
        split: true,
        collapsible: true,
        reference: 'detailPanel',
        width: 250,
        tpl: '<h1>{field1}<h1><p>Type: {field2}</p><p>Date: {field6}</p>'
    },{
        xtype: 'signature',
        region: 'center',
        listeners: {
            recordClick: 'showDetails'
        },
        flex: 1
    },]
});
