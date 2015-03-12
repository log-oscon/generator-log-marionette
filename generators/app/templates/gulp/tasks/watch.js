(function () {
    'use strict';

    /*
      Notes:
      - gulp/tasks/browserify.js handles js recompiling with watchify
      - gulp/tasks/browser-sync.js watches and reloads compiled files
    */

    var gulp   = require('gulp'),
        config = require('../config');

    gulp.task('watch', ['setWatch', 'browserSync'], function () {
        gulp.watch(config.sass.src, ['sass']);
        gulp.watch(config.images.src, ['images']);
        gulp.watch(config.jshint.src, ['jshint']);
        gulp.watch(config.phpunit.watch, ['phpunit']);

        return gulp.watch(config.jasmine.watch, ['jasmine']);
    });
})();
