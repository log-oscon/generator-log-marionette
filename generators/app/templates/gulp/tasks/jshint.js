(function () {
    'use strict';

    var gulp   = require('gulp'),
        config = require('../config'),
        jshint = require('gulp-jshint');

    gulp.task('jshint', function () {
        return gulp
            .src(config.jshint.src)
            .pipe(jshint())
            .pipe(jshint.reporter(config.jshint.reporter));
    });
})();
