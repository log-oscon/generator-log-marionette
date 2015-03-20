'use strict';

var utils   = require('../utils'),
    assert  = require('yeoman-generator').assert;

describe('log-marionette:app', function () {
    describe('when selecting handlebars', function () {
        before(function (done) {
            utils.runGenerator('../generators/app', {
                name:        'Project',
                description: 'Description',
                engine:      'handlebars'
            }, done);
        });

        it('should create project files', function () {
            assert.file([
                'package.json',
                '.editorconfig',
                '.jshintrc',
                '.gitignore',
                'config/shim.js'
            ]);
        });

        it('should have package.json set', function () {
            assert.fileContent('package.json', /"name": "Project"/);
            assert.fileContent('package.json', /"description": "Description"/);
            assert.fileContent('package.json', /"handlebars": "\~3.0.0"/);
        });

        it('should create src files', function () {
            assert.file([
                'src/scripts/main.js',
                'src/scripts/app/app.js',
                'src/scripts/app/radio.js',
                'src/scripts/app/behaviors/behaviors.js',
                'src/scripts/app/views/root-view.js',
                'src/scripts/app/templates/root.hbs'
            ]);
        });

        it('should create gulp tasks', function () {
            assert.file([
                'gulpfile.js',
                'gulp/config.js',
                'gulp/util/bundle-logger.js',
                'gulp/util/handle-errors.js',
                'gulp/util/node-path.js',
                'gulp/tasks/browser-sync.js',
                'gulp/tasks/browserify.js',
                'gulp/tasks/build.js',
                'gulp/tasks/clean.js',
                'gulp/tasks/default.js',
                'gulp/tasks/images.js',
                'gulp/tasks/jshint.js',
                'gulp/tasks/sass.js',
                'gulp/tasks/set-watch.js',
                'gulp/tasks/test.js',
                'gulp/tasks/unretina.js',
                'gulp/tasks/watch.js',
                'gulp/tasks/message-format.js'
            ]);
        });
    });

    describe('when selecting dust', function () {
        before(function (done) {
            utils.runGenerator('../generators/app', {
                name:        'Project',
                description: 'Description',
                engine:      'dust'
            }, done);
        });

        it('should create project files', function () {
            assert.file([
                'package.json',
                '.editorconfig',
                '.jshintrc',
                '.gitignore'
            ]);
        });

        it('should have package.json set', function () {
            assert.fileContent('package.json', /"name": "Project"/);
            assert.fileContent('package.json', /"description": "Description"/);
            assert.fileContent('package.json', /"dustjs-linkedin": "\^2.4.0"/);
            assert.fileContent('package.json', /"dustjs-helpers": "\^1.2.0"/);
        });

        it('should create src files', function () {
            assert.file([
                'src/scripts/main.js',
                'src/scripts/app/app.js',
                'src/scripts/app/radio.js',
                'src/scripts/app/behaviors/behaviors.js',
                'src/scripts/app/views/root-view.js',
                'src/scripts/app/templates/root.dust'
            ]);
        });

        it('should create gulp tasks', function () {
            assert.file([
                'gulpfile.js',
                'gulp/config.js',
                'gulp/util/bundle-logger.js',
                'gulp/util/handle-errors.js',
                'gulp/util/node-path.js',
                'gulp/tasks/browser-sync.js',
                'gulp/tasks/browserify.js',
                'gulp/tasks/build.js',
                'gulp/tasks/clean.js',
                'gulp/tasks/default.js',
                'gulp/tasks/images.js',
                'gulp/tasks/jshint.js',
                'gulp/tasks/sass.js',
                'gulp/tasks/set-watch.js',
                'gulp/tasks/test.js',
                'gulp/tasks/unretina.js',
                'gulp/tasks/watch.js',
                'gulp/tasks/message-format.js'
            ]);
        });
    });
});
