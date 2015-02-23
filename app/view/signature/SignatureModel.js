Ext.define('AppSigs.view.signature.SignatureModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.signaturemodel',
	
	requires: [
	    'AppSigs.store.Signatures'
	],

	stores: {
	    signaturesStore: {
	        type: 'signatures'
	        // ,
	        // filters: [
	        // 	function(record) {
	        // 		// console.log(record);

	        // 		if (record.data.field1 == '{searchField.value}') {
	        // 			console.log(record.data.field1);
	        // 			return record
	        // 		}

	        // 		// return record;
	        // 		// return (record.field1 == 'Rediff.Messenger');
	        // 	}
	        // ]



	  //       filters: [{
	  // 		    property: 'field1',
	  //   		value: '{searchField.value}'
			// }]
	    }
	}
});


