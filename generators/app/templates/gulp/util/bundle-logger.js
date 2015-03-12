(function () {
    'use strict';

    var util         = require('gulp-util'),
        colors       = util.colors,
        log          = util.log,
        startTime    = null,
        prettyHrtime = require('pretty-hrtime');

    module.exports = {
        start: function (filepath) {
            startTime = process.hrtime();
            return log('Bundling ' + colors.green(filepath) + '...');
        },

        end: function (filepath) {
            return log('Bundled ' + colors.green(filepath) + ' in ' + colors.magenta(prettyHrtime(process.hrtime(startTime))));
        }
    };
})();
