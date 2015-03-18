'use strict';

var generators = require('yeoman-generator');

require('../utils');

module.exports = {
    constructor: function () {
        generators.NamedBase.apply(this, arguments);

        if (typeof this._initialize === 'function') {
            this._initialize.apply(this, arguments);
        }
    },

    writing: {
        src: function () {
            var name = this._.strRightBack(this.name, '/'),
                values = { name: this._.classify(name), canonical: name };

            if (typeof this._onBeforeSrc === 'function') {
                values = this._onBeforeSrc(values);
            }

            var suffix = this.suffix || '',
                ext    = '.js';

            if (typeof this._ext === 'function') {
                ext = this._ext();
            } else if (this.ext) {
                ext = this.ext;
            }

            this.fs.copyTpl(
                this.templatePath(this.srcFile),
                this.destinationPath(this.srcPath + this.name + suffix + ext),
                values
            );

            if (typeof this._onSrc === 'function') {
                this._onSrc(values);
            }
        },

        test: function () {
            if (!this.specFile) {
                return;
            }

            var name   = this._.strRightBack(this.name, '/'),
                values = { name: this._.classify(name), path: this.name };

            if (typeof this._onBeforeTest === 'function') {
                this._onBeforeTest(values);
            }

            var suffix = this.suffix || '';
            this.fs.copyTpl(
                this.templatePath(this.specFile),
                this.destinationPath(this.specPath + this.name + suffix + '.spec.js'),
                values
            );

            if (typeof this._onTest === 'function') {
                this._onTest(values);
            }
        }
    }
};
