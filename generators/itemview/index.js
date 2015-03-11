'use strict';

var _             = require('lodash'),
    generators    = require('yeoman-generator'),
    BaseGenerator = require('../base-generator');

var ItemViewGenerator = generators.NamedBase.extend(_.extend({}, BaseGenerator, {
    srcFile:  'itemview.js',
    srcPath:  'src/scripts/app/views/',
    specFile: 'itemview.spec.js',
    specPath: 'src/tests/specs/views/',
    suffix:   'view',

    initialize: function () {
        this.option('all');
    },

    onBeforeSrc: function (values) {
        values.path = this.name;
        return values;
    }
}));

module.exports = ItemViewGenerator;
