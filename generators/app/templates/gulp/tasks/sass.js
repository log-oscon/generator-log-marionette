(function () {
    'use strict';

    var gulp         = require('gulp'),
        config       = require('../config'),
        handleErrors = require('../util/handle-errors'),
        gulpIf       = require('gulp-if'),
        sourcemaps   = require('gulp-sourcemaps'),
        scssLint     = require('gulp-scss-lint'),
        sass         = require('gulp-sass'),
        autoprefixer = require('gulp-autoprefixer'),
        minifyCss    = require('gulp-minify-css'),
        browserSync  = require('browser-sync'),
        plumber      = require('gulp-plumber');

    gulp.task('sass', ['images'], function () {
        return gulp
            .src(config.sass.src)
            .pipe(plumber())
            .pipe(gulpIf(config.debug, sourcemaps.init()))
            .pipe(scssLint())
            .pipe(sass(config.sass.settings))
            .on('error', handleErrors)
            .pipe(autoprefixer(config.autoprefixer))
            .pipe(minifyCss({
                keepSpecialComments: '*'
            }))
            .pipe(gulpIf(config.debug, sourcemaps.write()))
            .pipe(gulp.dest(config.sass.dest))
            .pipe(browserSync.reload({
                stream: true
            }));
    });
})();
