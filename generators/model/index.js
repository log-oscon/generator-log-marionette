'use strict';

var _             = require('lodash'),
    generators    = require('yeoman-generator'),
    BaseGenerator = require('../base-generator');

var ModelGenerator = generators.NamedBase.extend(_.extend({}, BaseGenerator, {
    srcFile:  'model.js',
    srcPath:  'src/scripts/app/models/',
    specFile: 'model.spec.js',
    specPath: 'src/tests/specs/models/'
}));

module.exports = ModelGenerator;
