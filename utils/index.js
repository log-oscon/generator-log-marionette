'use strict';

var _ = require('lodash');

_.mixin(require('underscore.inflections'));

module.exports = {
    banner:          require('./banner'),
    runGenerator:    require('./run-generator'),
    runSubGenerator: require('./run-sub-generator')
};
