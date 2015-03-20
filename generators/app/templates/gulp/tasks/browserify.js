(function() {
    'use strict';

    /*
      browserify task
      ---------------
      Bundle javascripty things with browserify!

      This task is set up to generate multiple separate bundles, from
      different sources, and to use Watchify when run from the default task.

      See browserify.bundleConfigs in gulp/config.js
    */

    var gulp         = require('gulp'),
        config       = require('../config'),
        dependencies = (require('../../package.json')).dependencies,
        bundleLogger = require('../util/bundle-logger'),
        handleErrors = require('../util/handle-errors'),
        glob         = require('glob'),
        browserify   = require('browserify'),
        source       = require('vinyl-source-stream'),
        watchify     = require('watchify');

    gulp.task('browserify', ['message-format'], function (callback) {

        var bundleQueue = config.browserify.bundleConfigs.length;

        var browserifyThis = function (bundleConfig) {

            var bundler = browserify({
                cache: {},
                packageCache: {},
                fullPaths: false,
                entries: bundleConfig.entries ? glob.sync(bundleConfig.entries) : undefined,
                extensions: config.browserify.extensions,
                debug: config.browserify.debug
            });

            if (bundleConfig.vendor) {
                for (var dep in dependencies) {
                    bundler.require(dep);
                }
            }

            if (!bundleConfig.vendor) {
                for (var dep in dependencies) {
                    bundler.external(dep);
                }
            }

            if (!config.browserify.debug) {
                bundler.transform({
                    global: true
                }, 'uglifyify');
            }

            var bundle = function () {
                bundleLogger.start(bundleConfig.outputName);

                return bundler
                    .bundle()
                    .on('error', handleErrors)
                    .pipe(source(bundleConfig.outputName))
                    .pipe(gulp.dest(bundleConfig.dest))
                    .on('end', reportFinished);
            };

            if (global.isWatching) {
                bundler = watchify(bundler);
                bundler.on('update', bundle);
            }

            var reportFinished = function () {
                bundleLogger.end(bundleConfig.outputName);

                if (bundleQueue > 0) {
                    bundleQueue--;
                    if (bundleQueue === 0) {
                        return callback();
                    }
                }

            };

            return bundle();
        };

        return config.browserify.bundleConfigs.forEach(browserifyThis);
    });

})();
