'use strict';

var _             = require('lodash'),
    generators    = require('yeoman-generator'),
    BaseGenerator = require('../base-generator');

var CompositeTemplateGenerator = generators.NamedBase.extend(_.extend({}, BaseGenerator, {
    srcFile: 'composite-template.html',
    srcPath: 'src/scripts/app/templates/',

    _ext: function () {
        return this.config.get('engine') === 'handlebars' ? '.hbs' : '.dust';
    }
}));

module.exports = CompositeTemplateGenerator;
