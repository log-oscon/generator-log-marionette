'use strict';

var _             = require('lodash'),
    generators    = require('yeoman-generator'),
    BaseGenerator = require('../base-generator');

var CollectionGenerator = generators.NamedBase.extend(_.extend({}, BaseGenerator, {
    srcFile:  'collection.js',
    srcPath:  'src/scripts/app/collections/',
    specFile: 'collection.spec.js',
    specPath: 'src/tests/specs/collections/',

    _initialize: function () {
        this.option('all', { desc: 'should also create its corresponding models' });
    },

    _onBeforeSrc: function (values) {
        values.model = _.singularize(values.name);
        values.path  = _.singularize(this.name);
        return values;
    },

    _onSrc: function () {
        if (this.options.all) {
            this.composeWith('log-marionette:model', { args: [_.singularize(this.name)] });
        }
    }
}));

module.exports = CollectionGenerator;
