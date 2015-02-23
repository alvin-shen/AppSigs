Ext.define('AppSigs.view.signature.SignatureController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.signature',

    onSearchClick: function() {
    	console.log("CLICKED");
    	var signaturesStore = this.getView().getStore();
		var searchField = this.lookupReference('searchField');
    	
		// console.log(signaturesStore);

		var filters = new Array();

		var filter = {
			property: 'field1',
			anyMatch: true,
			caseSensitive: false,
			value: searchField.value
		};

		filters.push(filter);

		signaturesStore.addFilter(filters);
    	// signaturesStore.filterBy(function(record, id) {

    	// 	if (record.data.field1.indexOf(searchField.value) > -1) {
    	// 		return record;
    	// 	} 
    	// });

    }
});