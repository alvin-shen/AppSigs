Ext.define('AppSigs.store.Signatures', {
	extend: 'Ext.data.Store',
	alias: 'store.signatures',

	// data: [
	//    [ 'Data1', 'Something1', 'Another' ],
	//    [ 'Data2', 'Something2', 'Another' ],
	//    [ 'Data3', 'Something3', 'Another' ],
	//    [ 'Data4', 'Something4', 'Another' ],
	//    [ 'Data5', 'Something5', 'Another' ],
	//    [ 'Data6', 'Something6', 'Another' ],
	//    [ 'Data7', 'Something7', 'Another' ],
	//    [ 'Data8', 'Something8', 'Another' ]
	// ],

	data: myData,
	// data: myDataSubset,

	fields: [
	    {name: 'field1'},
	    {name: 'field2'},
	    {name: 'field3'},
	    {name: 'field4'},
	    {name: 'field5'},
	    {name: 'field6'},
	    {name: 'field7'},
	    {name: 'field8'},
	    {name: 'field9'},
	    {name: 'field10'},
	    {name: 'field11'},
	    {name: 'field12'},
	    {name: 'field13'},
	    {name: 'field14'},
	    {name: 'field15'},
	    {name: 'field16'},
	    {name: 'field17'},
	],
	
	pageSize: 5,

    proxy: {
        type: 'memory',
        enablePaging: true,
        reader: {
            type: 'array'
        }
    }
});