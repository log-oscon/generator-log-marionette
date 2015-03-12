(function () {
    'use strict';

    var gulp     = require('gulp'),
        config   = require('../config'),
        unretina = require('gulp-unretina'),
        changed  = require('gulp-changed'),
        imagemin = require('gulp-imagemin'),
        plumber  = require('gulp-plumber');

    gulp.task('images', ['unretina'], function () {
        return gulp
            .src(config.images.src)
            .pipe(plumber())
            .pipe(changed(config.images.dest))
            .pipe(unretina())
            .pipe(imagemin())
            .pipe(gulp.dest(config.images.dest));
    });
})();
