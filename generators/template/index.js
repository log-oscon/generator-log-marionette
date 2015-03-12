'use strict';

var _             = require('lodash'),
    generators    = require('yeoman-generator'),
    BaseGenerator = require('../base-generator');

var TemplateGenerator = generators.NamedBase.extend(_.extend({}, BaseGenerator, {
    srcFile: 'template.html',
    srcPath: 'src/scripts/app/templates/',

    _ext: function () {
        return this.config.get('engine') === 'handlebars' ? '.hbs' : '.dust';
    }
}));

module.exports = TemplateGenerator;
