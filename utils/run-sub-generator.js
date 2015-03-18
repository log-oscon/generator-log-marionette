'use strict';

var path    = require('path'),
    os      = require('os'),
    helpers = require('yeoman-generator').test;

module.exports = function (generator, options) {
    helpers.run(path.join(__dirname, generator))
        .inDir(path.join(os.tmpdir(), './temp-test'))
        .withArguments(options.args || [])
        .withOptions(options.options || {})
        .withGenerators(options.generators || [])
        .on('end', options.done);
};
