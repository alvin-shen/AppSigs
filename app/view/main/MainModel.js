/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('AppSigs.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    
    requires: [
        'AppSigs.store.Signatures'
    ],

    alias: 'viewmodel.main',


    stores: {
        signaturesStore: {
            type: 'signatures'
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});