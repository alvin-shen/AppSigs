Ext.define('AppSigs.view.signature.SignatureModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.signaturemodel',
	
	requires: [
	    'AppSigs.store.Signatures'
	],

	stores: {
	    signaturesStore: {
	        type: 'signatures'
	    }
	}
});


