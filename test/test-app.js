'use strict';

var utils   = require('./utils'),
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

        it('creates project files', function () {
            assert.file([
                'package.json',
                '.editorconfig',
                '.jshintrc',
                '.gitignore'
            ]);
        });

        it('creates src files', function () {
            assert.file([
                'src/scripts/main.js',
                'src/scripts/app/app.js',
                'src/scripts/app/radio.js',
                'src/scripts/app/behaviors/behaviors.js',
                'src/scripts/app/views/root-view.js',
                'src/scripts/app/templates/root.hbs'
            ]);
        });

        it('creates gulp talks', function () {
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
                'gulp/tasks/jasmine.js',
                'gulp/tasks/jshint.js',
                'gulp/tasks/sass.js',
                'gulp/tasks/set-watch.js',
                'gulp/tasks/test.js',
                'gulp/tasks/unretina.js',
                'gulp/tasks/watch.js'
            ]);
        });
    });

    describe('when selecting dust', function() {
        before(function (done) {
            utils.runGenerator('../generators/app', {
                name:        'Project',
                description: 'Description',
                engine:      'dust'
            }, done);
        });

        it('creates project files', function () {
            assert.file([
                'package.json',
                '.editorconfig',
                '.jshintrc',
                '.gitignore'
            ]);
        });

        it('creates src files', function () {
            assert.file([
                'src/scripts/main.js',
                'src/scripts/app/app.js',
                'src/scripts/app/radio.js',
                'src/scripts/app/behaviors/behaviors.js',
                'src/scripts/app/views/root-view.js',
                'src/scripts/app/templates/root.dust'
            ]);
        });

        it('creates gulp talks', function () {
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
                'gulp/tasks/jasmine.js',
                'gulp/tasks/jshint.js',
                'gulp/tasks/sass.js',
                'gulp/tasks/set-watch.js',
                'gulp/tasks/test.js',
                'gulp/tasks/unretina.js',
                'gulp/tasks/watch.js'
            ]);
        });
    });
});
