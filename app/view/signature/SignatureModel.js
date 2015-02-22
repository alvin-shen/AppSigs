Ext.define('AppSigs.view.signature.SignatureModel', {

	extend: 'Ext.app.ViewModel',
	
	requires: [
	    'AppSigs.store.Signatures'
	],

	alias: 'viewmodel.signaturemodel',


	stores: {
	    signaturesStore: {
	        type: 'signatures'
	    }
	}


 //    extend: 'Ext.app.ViewModel',
 //    alias: 'viewmodel.signature',


 //    stores: {
 //        signatures: {
 //            pageSize: 2,


 //            fields: [
 //                {name: 'field1'},
 //                {name: 'field2'},
 //                {name: 'field3'},
 //                {name: 'field4'},
 //                {name: 'field5'},
 //                {name: 'field6'},
 //                {name: 'field7'},
 //                {name: 'field8'},
 //                {name: 'field9'},
 //                {name: 'field10'},
 //                {name: 'field11'},
 //                {name: 'field12'},
 //                {name: 'field13'},
 //                {name: 'field14'},
 //                {name: 'field15'},
 //                {name: 'field16'},
 //                {name: 'field17'},
 //            ],


 //            data: myData,

 //            proxy: {
 //                type: 'memory',
 //                enablePaging: true,

 //                reader: {
 //                    type: 'array',
 //                }
 //            }
 //        }
	// }
});


