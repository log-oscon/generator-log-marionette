'use strict';

var _             = require('lodash'),
    generators    = require('yeoman-generator'),
    BaseGenerator = require('../base-generator');

var RouterGenerator = generators.NamedBase.extend(_.extend({}, BaseGenerator, {
    srcFile: 'router.js',
    srcPath: 'src/scripts/app/routers/',
    suffix:  '-router'
}));

module.exports = RouterGenerator;
