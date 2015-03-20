/*jslint indent: 4, nomen: true */
/*global define */
// define(function (require, exports, module) {
define(function (require, exports) {

    'use strict';

    var DOMAIN_IS_ASYNC = false,
        DOMAIN_NAME = 'simple-domain',
        DOMAIN_DESCRIPTION = 'Simple Domain Description',
        DOMAIN_PARAMS = [{
            name: 'paramName',
            type: 'param_type',
            description: 'Param description'
        }],
        DOMAIN_RESULT = [{
            name: 'resultName',
            type: 'result_type',
            description: 'Result description'
        }];

    function _execute(paramName) {
        var resultName = paramName;
        return resultName;
    }

    function init(domainManager) {
        if (!domainManager.hasDomain(DOMAIN_NAME)) {
            domainManager.registerDomain(DOMAIN_NAME, {
                major: 0,
                minor: 1
            });
        }
        domainManager.registerCommand(DOMAIN_NAME, 'method_to_call', _execute, DOMAIN_IS_ASYNC, DOMAIN_DESCRIPTION, DOMAIN_PARAMS, DOMAIN_RESULT);
    }

    exports.init = init;

});
