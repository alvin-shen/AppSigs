Ext.define('AppSigs.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    showDetails: function(record) {
        console.log(record);

        var detailPanel = this.lookupReference('detailPanel');
        console.log(detailPanel);


        detailPanel.tpl.overwrite(detailPanel.body, record.data);
        // detailPanel.setHtml(html);

    }
});


var html = '<h1>test</h1>'
