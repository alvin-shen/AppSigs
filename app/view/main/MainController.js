Ext.define('AppSigs.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    showDetails: function(record) {
        var detailPanel = this.lookupReference('detailPanel');
        detailPanel.tpl.overwrite(detailPanel.body, record.data);
        detailPanel.setCollapsed(false);
    }
});