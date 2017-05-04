/*
 * File: app/view/MainPanelViewController.js
 *
 * This file was generated by Sencha Architect version 4.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

/*
    TODO: The routes are not working when accesing the page - possible bug in ExtJS?
*/
Ext.define('Enif.view.MainPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainpanel',

    requires: [
        'Enif.view.forms.AddGameDialog'
    ],

    routes: {
        'players': 'showPlayers',
        'games': 'showGames',
        'eloChart': 'showEloChart'
    },

    showPlayers: function() {
        this.changeTab(0);
    },

    showGames: function() {
        this.changeTab(1);
    },

    showEloChart: function() {
        this.changeTab(2);
    },

    changeTab: function(index) {
        let view = this.getView();
        if(view.getActiveItem() != index){
            view.setActiveItem(index);
        }
    },

    onAddGameTap: function(button, e, eOpts) {
        Ext.create('Enif.view.forms.AddGameDialog').show();
    },

    onRefreshButtonTap: function(button, e, eOpts) {
        Enif.app.getController('storeLoadController').reloadAllStores();
    },

    onTabChange: function(sender, value, oldValue, eOpts) {
        this.redirectTo(value.routeValue);
    }

});