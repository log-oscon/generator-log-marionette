'use strict';

var yeoman = require('yeoman-generator'),
    utils  = require('../../utils');

var LogGenerator = yeoman.generators.Base.extend({
    prompts:      require('./prompts'),
    dirs:         require('./dirs'),
    srcFiles:     require('./src-files'),
    projectFiles: require('./project-files'),

    constructor: function () {
        yeoman.generators.Base.apply(this, arguments);
        this.option('skip-install');
    },

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

        src: function () {
            this._copyFiles(this.srcFiles.files(this));
        },

        tasks: function () {
            this.directory('gulp', 'gulp');
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
            this.copy(file.src, file.dst);
        }.bind(this));
    },

    end: function () {
        if (!this.options['skip-install']) {
            this.installDependencies();
        }
    }
});

module.exports = LogGenerator;
