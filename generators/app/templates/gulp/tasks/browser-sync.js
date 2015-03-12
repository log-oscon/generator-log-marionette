(function () {
    'use strict';

    var gulp        = require('gulp'),
        config      = require('../config'),
        browserSync = require('browser-sync');

    gulp.task('browserSync', ['build'], function () {
        return browserSync(config.browserSync);
    });
})();
