(function () {
    'use strict';

    var gulp    = require('gulp'),
        config  = require('../config'),
        jasmine = require('gulp-jasmine-phantom');

    gulp.task('jasmine', function () {
        return gulp
            .src(config.jasmine.specs)
            .pipe(jasmine({
                integration: true
            }));
    });
})();
