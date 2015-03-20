/*jslint plusplus: true, nomen: true, indent: 4*/
/*global define, brackets, console */
define(function (require, exports, module) {

    'use strict';

    var _ = brackets.getModule('thirdparty/lodash'),
        NodeDomain = brackets.getModule('utils/NodeDomain'),
        ExtensionUtils = brackets.getModule('utils/ExtensionUtils'),

        /* --------------------------------------------------
         *
         * node domain
         *
         */
        simpleDomain = new NodeDomain('simple-domain', ExtensionUtils.getModulePath(module, '../node/simple-domain')),

        /* --------------------------------------------------
         *
         * helper privates methods
         *
         */
        __privateMethods = {

            _domainMethod: function () {
                var domainVariable = '';
                simpleDomain.exec('method_to_call', domainVariable).done(function (domainResult) {
                    domainResult = null;
                    // node domain result
                }).fail(function (err) {
                    // node domain result fail
                    err = null;
                });
            },

            _onProjectOpen: function () {
                console.log('<%= project.name %> :: project open');
            },

            _onProjectClose: function () {
                console.log('<%= project.name %> :: project close');
            },

            _onProjectRefresh: function () {
                console.log('<%= project.name %> :: project refresh');
            }

        },

        // Constructor
        Helper = function () {};

    _.extend(Helper.prototype, __privateMethods);

    /* --------------------------------------------------
     *
     * Public Methods
     *
     */
    Helper.prototype.onAppReady = function () {};

    // exports class
    module.exports = Helper;

});
