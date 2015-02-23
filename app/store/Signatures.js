Ext.define('AppSigs.store.Signatures', {
	extend: 'Ext.data.Store',
	alias: 'store.signatures',
	model: 'AppSigs.model.Signature',

	data: myData,

	pageSize: 25,
	remoteFilter: true,
	remoteSort: true,

    proxy: {
        type: 'memory',
        enablePaging: true,
        reader: {
            type: 'array'
        }
    }
});