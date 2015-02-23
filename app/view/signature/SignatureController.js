Ext.define('AppSigs.view.signature.SignatureController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.signature',

    onSearchClick: function() {
    	console.log("CLICKED");
    	var signaturesStore = this.getView().getStore();
		var searchField = this.lookupReference('searchField');

		var filter = {
			property: 'field1',
			anyMatch: true,
			caseSensitive: false,
			value: searchField.value
		};

		signaturesStore.addFilter(filter);
    },

    onSpecialKey: function(field, e) {
    	switch (e.getKey()) {
    		case e.BACKSPACE:
    			var searchField = this.lookupReference('searchField');
    			var signaturesStore = this.getView().getStore();

    			if (searchField.value == "") {
    				console.log("nul");
    				signaturesStore.clearFilter();
    			}
    		break;
    		case e.ENTER:
    			this.onSearchClick();
    		break;
    		default:
    		break;
    	}
    },

    onRowMouseUp: function(row, record) {
        this.getView().fireEvent("recordClick", record);
    }
});