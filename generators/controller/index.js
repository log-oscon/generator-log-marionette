'use strict';

var _             = require('lodash'),
    generators    = require('yeoman-generator'),
    BaseGenerator = require('../base-generator');

var ControllerGenerator = generators.NamedBase.extend(_.extend({}, BaseGenerator, {
    srcFile:  'controller.js',
    srcPath:  'src/scripts/app/controllers/',
    specFile: 'controller.spec.js',
    specPath: 'src/tests/specs/controllers/',
    suffix:   '-controller',

    _initialize: function () {
        this.option('extend', { type: String, desc: 'should extend from another controller', defaults: '' });
    },

    _onBeforeSrc: function (values) {
        if (this.options.extend) {
            values.extend = this._.classify(this._.strRightBack(this.options.extend, '/'));
            values.extend_path = this.options.extend;
        } else {
            values.extend = false;
        }

        return values;
    }
}));

module.exports = ControllerGenerator;
