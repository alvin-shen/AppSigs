Ext.define('AppSigs.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'AppSigs.view.signature.Signature',
        'AppSigs.view.main.MainController'
    ],
    controller: 'main',
    xtype: 'app-main',

    layout: 'border',

    items: [
    {
        xtype: 'panel',
        region: 'west',
        title: 'Application Details',
        autoScroll: true,
        split: true,
        collapsible: true,
        collapsed: true,
        reference: 'detailPanel',
        width: 300,
        tpl: '<div style="padding-left: 10px;">' +
                '<h1>{field1}<h1>' +
                '<div style="font-size: 14px;">' +
                    '<a href=http://{field8} target="_blank">{field7}</a>' +
                    '<p>Application: {field12}</p>' +
                    '<p>Type: {field2}</p>' +
                    '<p>Date: {field6}</p>' +
                    '<p>Problem: {field9}</p>' +
                    '<p>{field10}</p>' +
                    '<p>{field13}</p>' +
                '</div>' +
            '</div>'
    },{
        xtype: 'signature',
        region: 'center',
        listeners: {
            recordClick: 'showDetails'
        },
        flex: 1
    },]
});
