(function () {
    'use strict';

    var gulp     = require('gulp'),
        config   = require('../config'),
        changed  = require('gulp-changed'),
        unretina = require('gulp-unretina'),
        imagemin = require('gulp-imagemin'),
        plumber  = require('gulp-plumber');

    gulp.task('unretina', function () {
        return gulp
            .src(config.images.src + '/*@2x.*')
            .pipe(plumber())
            .pipe(changed(config.images.dest))
            .pipe(unretina())
            .pipe(imagemin())
            .pipe(gulp.dest(config.images.dest));
    });
})();
