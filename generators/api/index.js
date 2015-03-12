'use strict';

var _             = require('lodash'),
    generators    = require('yeoman-generator'),
    BaseGenerator = require('../base-generator');

var ApiGenerator = generators.NamedBase.extend(_.extend({}, BaseGenerator, {
    srcFile:  'api.js',
    srcPath:  'src/scripts/app/apis/',
    specFile: 'api.spec.js',
    specPath: 'src/tests/specs/apis/',
    suffix:   '-api'
}));

module.exports = ApiGenerator;
