Ext.define('AppSigs.view.signature.Signature', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.signature',

    requires: [
        'AppSigs.view.signature.SignatureController',
        'AppSigs.view.signature.SignatureModel',
    ],

    controller: 'signature',

    viewModel: {
        type: 'signaturemodel'
    },

    bind: {
     store: '{signaturesStore}'
    },

    title: 'Application Signatures',

    listeners: {
        rowmouseup: 'onRowMouseUp'
    },

    tbar: [{
        xtype: 'textfield',
        emptyText: 'Search Applications',
        reference: 'searchField',
        width: 300,
        enableKeyEvents: true,
        listeners: {
            specialkey: 'onSpecialKey'
        }
    },{
        xtype: 'button',
        iconCls: 'btn-search',
        listeners: {
            click: 'onSearchClick'
        }
    }],

    columns: [
        {text: 'Application', dataIndex: 'field1', flex: 1},
        {text: 'Type', dataIndex: 'field2', flex: 1},
        {text: 'Problem', dataIndex: 'field9', flex: 1},
        {text: 'Date', dataIndex: 'field6', flex: 1}
    ],

    dockedItems: [{
        xtype: 'pagingtoolbar',
        bind: {
            store: '{signaturesStore}'
        },
        dock: 'bottom',
        displayInfo: true
    }]
});