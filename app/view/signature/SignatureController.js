Ext.define('AppSigs.view.signature.SignatureController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.signature',

    onSearchClick: function() {
    	var signaturesStore = this.getView().getStore();
		var searchField = this.lookupReference('searchField');

        var filters = new Array();
		var filter = {
			property: 'field1',
			anyMatch: true,
			caseSensitive: false,
			value: searchField.value
		};
        filters.push(filter);
		signaturesStore.addFilter(filters);
    },

    onSpecialKey: function(field, e) {
    	switch (e.getKey()) {
    		case e.BACKSPACE:
    			var searchField = this.lookupReference('searchField');
    			var signaturesStore = this.getView().getStore();

    			if (searchField.value == "") {
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
    },

    clearFilter: function() {
        this.getView().getStore().clearFilter();
        var searchField = this.lookupReference('searchField');
        searchField.reset();
    }
});