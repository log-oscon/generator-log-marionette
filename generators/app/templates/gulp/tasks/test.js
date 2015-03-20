(function () {
    'use strict';

    var gulp    = require('gulp'),
        mochify = require('mochify'),
        jsdom   = require('jsdom');

    gulp.task('test', function (done) {
        jsdom.env('<html><head></head><body></body></html>', function (errors, window) {
            global.$        = global.jQuery = require('jquery')(window);
            global._        = require('lodash');
            global.Backbone = require('backbone');
            global.Backbone.$ = global.$;

            global.Marionette = require('backbone.marionette');
            global.Backbone.Marionette = global.Marionette;

            mochify('./src/tests/specs/**/*.spec.js', {
                watch:     true,
                extension: ['.hbs', '.dust'],
                reporter:  'spec'
            }).bundle().on('end', done);
        });
    });
})();
