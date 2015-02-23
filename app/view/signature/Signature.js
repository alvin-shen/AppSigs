Ext.define('AppSigs.view.signature.Signature', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.signature',

    requires: [
        'AppSigs.view.signature.SignatureController',
        'AppSigs.view.signature.SignatureModel',
        // 'AppSigs.store.Signatures'
    ],

    controller: 'signature',

    viewModel: {
        type: 'signaturemodel'
    },

    bind: {
     store: '{signaturesStore}'
    },
    // bind: '{signaturesStore}',
    // store: {
    //     type: 'signatures'
    // },

    title: 'Application Signatures',

    tbar: [{
        xtype: 'textfield',
        emptyText: 'Search Applications',
        reference: 'searchField',
        width: 300
    },{
        xtype: 'button',
        iconCls: 'btn-search',
        listeners: {
            click: 'onSearchClick'
        }
    }],

    columns: [
        {text: '1', dataIndex: 'field1'},
        {text: '2', dataIndex: 'field2'},
        {text: '3', dataIndex: 'field3'},
        {text: '4', dataIndex: 'field4'},
        {text: '5', dataIndex: 'field5'},
        {text: '6', dataIndex: 'field6'},
        {text: '7', dataIndex: 'field7'},
        {text: '8', dataIndex: 'field8'},
        {text: '9', dataIndex: 'field9'},
        {text: '10', dataIndex: 'field10'},
        {text: '11', dataIndex: 'field11'},
        {text: '12', dataIndex: 'field12'},
        {text: '13', dataIndex: 'field13'},
        {text: '14', dataIndex: 'field14'},
        {text: '15', dataIndex: 'field15'},
        {text: '16', dataIndex: 'field16'},
        {text: '17', dataIndex: 'field17'}
    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        bind: {
            store: '{signaturesStore}'
        },
        // bind: '{signaturesStore}',
        dock: 'bottom',
        displayInfo: true
    }]
});