'use strict';

var _             = require('lodash'),
    generators    = require('yeoman-generator'),
    BaseGenerator = require('../base-generator');

var ItemViewGenerator = generators.NamedBase.extend(_.extend({}, BaseGenerator, {
    srcFile:  'layoutview.js',
    srcPath:  'src/scripts/app/views/',
    specFile: 'layoutview.spec.js',
    specPath: 'src/tests/specs/views/',
    suffix:   '-view',

    _initialize: function () {
        this.option('all', { desc: 'should also create its corresponding template' });
    },

    _onBeforeSrc: function (values) {
        values.path = this.name;
        return values;
    },

    _onSrc: function () {
        if (this.options.all) {
            this.composeWith('log-marionette:template', { args: [this.name] });
        }
    }
}));

module.exports = ItemViewGenerator;
