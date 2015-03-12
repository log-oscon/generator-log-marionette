'use strict';

var _             = require('lodash'),
    generators    = require('yeoman-generator'),
    BaseGenerator = require('../base-generator');

var BehaviorGenerator = generators.NamedBase.extend(_.extend({}, BaseGenerator, {
    srcFile: 'behavior.js',
    srcPath: 'src/scripts/app/behaviors/',
    suffix:  '-behavior'
}));

module.exports = BehaviorGenerator;
