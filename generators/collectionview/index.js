'use strict';

var _             = require('lodash'),
    generators    = require('yeoman-generator'),
    BaseGenerator = require('../base-generator');

var CollectionViewGenerator = generators.NamedBase.extend(_.extend({}, BaseGenerator, {
    srcFile:  'collectionview.js',
    srcPath:  'src/scripts/app/views/',
    specFile: 'collectionview.spec.js',
    specPath: 'src/tests/specs/views/',
    suffix:   '-view',

    _initialize: function () {
        this.option('all', { desc: 'should also create its corresponding itemviews' });
    },

    _onBeforeSrc: function (values) {
        values.path  = _.singularize(this.name);
        values.child = _.singularize(values.name);
        return values;
    },

    _onSrc: function () {
        if (this.options.all) {
            this.composeWith('log-marionette:itemview', { args: [_.singularize(this.name)], options: { all: this.options.all } });
        }
    }
}));

module.exports = CollectionViewGenerator;
