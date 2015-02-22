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
        // 'AppSigs.store.Signatures'
        'AppSigs.view.main.MainModel'
    ],

    // viewModel: {
    //     stores: {
    //         signaturesStore: {
    //             type: 'signatures'
    //         }
    //     }
    // },
    xtype: 'app-main',
    
    // controller: 'main',
    viewModel: {
        type: 'main'
    },



    items: [{
        xtype: 'gridpanel',
        bind: '{signaturesStore}',
        columns: [
                {text: 'Field 1', dataIndex: 'field1'},
                {text: 'Field 2', dataIndex: 'field2'}
                // ,
                // {text: 'Field 3', dataIndex: 'field3'},
                // {text: 'Field 4', dataIndex: 'field4'},
                // {text: 'Field 5', dataIndex: 'field5'},
                // {text: 'Field 6', dataIndex: 'field6'},
                // {text: 'Field 7', dataIndex: 'field7'},
                // {text: 'Field 8', dataIndex: 'field8'},
                // {text: 'Field 9', dataIndex: 'field9'},
                // {text: 'Field 10', dataIndex: 'field10'},
                // {text: 'Field 11', dataIndex: 'field11'},
                // {text: 'Field 12', dataIndex: 'field12'},
                // {text: 'Field 13', dataIndex: 'field13'},
                // {text: 'Field 14', dataIndex: 'field14'},
                // {text: 'Field 15', dataIndex: 'field15'},
                // {text: 'Field 16', dataIndex: 'field16'}
        ],
        dockedItems: [{
            xtype: 'pagingtoolbar',
            bind: '{signaturesStore}',
            dock: 'bottom',
            displayInfo: true
        }],
    }]



});
