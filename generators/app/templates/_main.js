/*jslint nomen: true, indent: 4, plusplus: true */
/*global define, brackets, $, Mustache */
define(function (require, exports, module) {

    'use strict';
    /** ------------------------------------

    Modules

*/
    var Menus = brackets.getModule('command/Menus'),
        AppInit = brackets.getModule('utils/AppInit'),
        Resizer = brackets.getModule('utils/Resizer'),
        Commands = brackets.getModule('command/Commands'),
        ExtensionUtils = brackets.getModule('utils/ExtensionUtils'),
        MainViewManager = brackets.getModule('view/MainViewManager'),
        CommandManager = brackets.getModule('command/CommandManager'),
        WorkspaceManager = brackets.getModule('view/WorkspaceManager'),
        PreferencesManager = brackets.getModule('preferences/PreferencesManager'),
        // _ = brackets.getModule('thirdparty/lodash'),
        /** ------------------------------------

    Globals

*/
        PREFIX = '<%= author.name %>',
        EXTENSION_ID = '<%= project.name %>',
        SHOWPANEL_COMMAND_ID = PREFIX + '.' + EXTENSION_ID + '.showpanel',
        /** ------------------------------------

    Requires

*/
        ExtensionStrings = require('strings'),
        /** ------------------------------------

    UI Templates

*/
        PanelHTML = require('text!htmlContent/panel.html'),
        ButtonHTML = require('text!htmlContent/button.html'),
        /** ------------------------------------

    Variables

*/
        $appPanel, // extension bottom panel
        $appButton, // right toolbar button
        $panelContainer, // bottom panel main view
        extensionPrefs = PreferencesManager.getExtensionPrefs(PREFIX + '.' + EXTENSION_ID);
    /** ------------------------------------

    UI Variables

*/
    ExtensionUtils.loadStyleSheet(module, 'htmlContent/css/styles.css');

    /** ------------------------------------

    Private Functions

*/
    function _handlerPanelVisibility() {
        Resizer.toggle($appPanel);
        $appButton.toggleClass('active');
        var opened = $appButton.hasClass('active');
        extensionPrefs.set('opened', opened);
        CommandManager.get(SHOWPANEL_COMMAND_ID).setChecked(opened);
        if (!opened) {
            MainViewManager.focusActivePane();
        }
    }

    function _setPreferences(){

        // si la valeur
        // n'est pas definie a l'installation
        /*
        if (!extensionPrefs.get('opened')) {
            extensionPrefs.set('opened', false);
        }
        */

    }

    /** ------------------------------------

    Commands and Menus

*/
    function __registerCommands() {
        CommandManager.register(ExtensionStrings.SHOW_PANEL, SHOWPANEL_COMMAND_ID, _handlerPanelVisibility);
    }


    function __registerWindowsMenu() {
        var menu = Menus.getMenu(Menus.AppMenuBar.VIEW_MENU);
        menu.addMenuItem(SHOWPANEL_COMMAND_ID, null, Menus.AFTER, Commands.VIEW_TOGGLE_INSPECTION);
    }

    /** ------------------------------------

    Extension Inits

*/

    // before AppInit.appReady
    AppInit.htmlReady(function () {
        var minHeight = 100,
            base = '#<%= project.name %>-panel .toolbar';
        WorkspaceManager.createBottomPanel(EXTENSION_ID + '.panel', $(Mustache.render(PanelHTML, ExtensionStrings)), minHeight);
        $appPanel = $('#<%= project.name %>-panel');
        $panelContainer = $($appPanel.find('.table-container').first());
        $('#main-toolbar .buttons').append(Mustache.render(ButtonHTML, ExtensionStrings));
        //
        $(base + ' .close').on('click', _handlerPanelVisibility);
        $(base + ' .title').on('click', _handlerPanelVisibility);
        $appButton = $('#<%= project.name %>-button').on('click', _handlerPanelVisibility);
    });

    // After AppInit.htmlReady
    AppInit.appReady(function () {
        __registerCommands();
        __registerWindowsMenu();
        _setPreferences();
    });

});
