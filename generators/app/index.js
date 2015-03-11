'use strict';
var yeoman = require('yeoman-generator'),
    utils  = require('../../utils');

var LogGenerator = yeoman.generators.Base.extend({
    prompts:      require('./prompts'),
    dirs:         require('./dirs'),
    srcFiles:     require('./src-files'),
    projectFiles: require('./project-files'),

    prompting: function () {
        var done = this.async();

        utils.banner();

        this.prompt(this.prompts, function (props) {
            this.config.set(props);
            done();
        }.bind(this));
    },

    writing: {
        app: function () {
            this._copyDirs();
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json'),
                this.config.getAll()
            );
        },

        code: function () {
            this._copyFiles(this.srcFiles.files(this));
        },

        projectFiles: function () {
            this._copyFiles(this.projectFiles);
        }
    },

    _copyDirs: function () {
        this.dirs.forEach(function (dir) {
            this.dest.mkdir(dir);
        }.bind(this));
    },

    _copyFiles: function (files) {
        files.forEach(function (file) {
            this.fs.copyTpl(
                this.templatePath(file.src),
                this.destinationPath(file.dst),
                {}
            );
        }.bind(this));
    }

    // end: function() {
    //     this.installDependencies();
    // }
});

module.exports = LogGenerator;
