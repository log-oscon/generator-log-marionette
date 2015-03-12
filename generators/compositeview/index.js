'use strict';

var _             = require('lodash'),
    generators    = require('yeoman-generator'),
    BaseGenerator = require('../base-generator');

var CollectionViewGenerator = generators.NamedBase.extend(_.extend({}, BaseGenerator, {
    srcFile:  'compositeview.js',
    srcPath:  'src/scripts/app/views/',
    specFile: 'compositeview.spec.js',
    specPath: 'src/tests/specs/views/',
    suffix:   '-view',

    _initialize: function () {
        this.option('all', { desc: 'should also create its corresponding template and itemviews' });
    },

    _onBeforeSrc: function (values) {
        values.path       = this.name;
        values.child      = _.singularize(values.name);
        values.child_path = _.singularize(this.name);
        return values;
    },

    _onSrc: function () {
        if (this.options.all) {
            this.composeWith('log-js:composite-template', { args: [this.name] });
            this.composeWith('log-js:itemview', { args: [_.singularize(this.name)], options: { all: this.options.all } });
        }
    }
}));

module.exports = CollectionViewGenerator;
