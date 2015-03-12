'use strict';

var _             = require('lodash'),
    generators    = require('yeoman-generator'),
    BaseGenerator = require('../base-generator');

var RegionGenerator = generators.NamedBase.extend(_.extend({}, BaseGenerator, {
    srcFile: 'region.js',
    srcPath: 'src/scripts/app/regions/',
    suffix:  '-region'
}));

module.exports = RegionGenerator;
