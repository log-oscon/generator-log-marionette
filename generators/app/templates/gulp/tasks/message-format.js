(function () {
    'use strict';

    var gulp          = require('gulp'),
        config        = require('../config'),
        handleErrors  = require('../util/handle-errors'),
        messageformat = require('gulp-messageformat');

    gulp.task('message-format', function (callback) {
        var queue;

        if (config.messageformat) {
            queue = Object.keys(config.messageformat).length;
        }

        if (!queue) {
            return callback();
        }

        var compile = function (locale, config) {
            return gulp
                .src(config.src)
                .pipe(messageformat({
                    locale: locale
                }))
                .on('error', handleErrors)
                .pipe(gulp.dest(config.dest))
                .on('end', function () {
                    queue--;
                    if (queue === 0) {
                        return callback();
                    }
                });
        };

        var results = [];
        for (var locale in config.messageformat) {
            results.push(compile(locale, config.messageformat[locale]));
        }

        return results;
    });
})();
