'use strict';

var generators = require('yeoman-generator');

var i18nGenerator = generators.NamedBase.extend({
    constructor: function () {
        generators.NamedBase.apply(this, arguments);
        this.option('lang', { desc: 'Comma-separated (en,pt,es) languages', type: String, defaults: 'en' });
    },

    writing: {
        files: function () {
            this.options.lang.split(',').forEach(function (lang) {
                this.fs.copyTpl(
                    this.templatePath('i18n.json'),
                    this.destinationPath('src/i18n/' + lang + '/' + this.name + '.json'),
                    {}
                );
            }.bind(this));
        }
    }
});

module.exports = i18nGenerator;
