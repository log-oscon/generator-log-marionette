'use strict';

var generators = require('yeoman-generator');

require('../utils');

module.exports = {
    constructor: function () {
        generators.NamedBase.apply(this, arguments);

        if (typeof this.initialize === 'function') {
            this.initialize.apply(this, arguments);
        }
    },

    writing: {
        src: function () {
            var name = this._.strRightBack(this.name, '/'),
                values = { name: this._.classify(name) };

            if (typeof this.onBeforeSrc === 'function') {
                values = this.onBeforeSrc(values);
            }

            var suffix = this.suffixName || '';
            this.fs.copyTpl(
                this.templatePath(this.srcFile),
                this.destinationPath(this.srcPath + this.name + suffix + '.js'),
                values
            );

            if (typeof this.onSrc === 'function') {
                this.onSrc(values);
            }
        },

        test: function () {
            var name   = this._.strRightBack(this.name, '/'),
                values = { name: this._.classify(name), path: this.name };

            if (typeof this.onBeforeTest === 'function') {
                this.onBeforeTest(values);
            }

            var suffix = this.suffixName || '';
            this.fs.copyTpl(
                this.templatePath(this.specFile),
                this.destinationPath(this.specPath + this.name + suffix + '.spec.js'),
                values
            );

            if (typeof this.onTest === 'function') {
                this.onTest(values);
            }
        }
    }
};
