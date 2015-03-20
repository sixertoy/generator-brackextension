/*jslint nomen: true, indent: 4, plusplus: true */
/*global define, console, brackets, _, $, Mustache, window, document */
define(function (require, exports, module) {

    'use strict';
    /** ------------------------------------

    Modules

*/
    var _ = brackets.getModule('thirdparty/lodash'),
        Menus = brackets.getModule('command/Menus'),
        AppInit = brackets.getModule('utils/AppInit'),
        Resizer = brackets.getModule('utils/Resizer'),
        Commands = brackets.getModule('command/Commands'),
        ExtensionUtils = brackets.getModule('utils/ExtensionUtils'),
        PreferencesManager = brackets.getModule('preferences/PreferencesManager'),
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
        /** ------------------------------------

    Variables

*/
        extensionPrefs = PreferencesManager.getExtensionPrefs(PREFIX + '.' + EXTENSION_ID);
        /** ------------------------------------

    UI Variables

*/
    ExtensionUtils.loadStyleSheet(module, 'htmlContent/css/styles.css');

    /** ------------------------------------

    Private Functions

*/
    function _handlerPanelVisibility(){
    }

    /** ------------------------------------

    Extension Inits

*/

    // before AppInit.appReady
    AppInit.htmlReady(function () {
    });

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

    // After AppInit.htmlReady
    AppInit.appReady(function () {

        __registerCommands();
        __registerWindowsMenu();

    });

});
