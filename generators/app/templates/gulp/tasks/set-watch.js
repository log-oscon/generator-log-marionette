(function () {
    'use strict';

    var gulp = require('gulp');

    gulp.task('setWatch', function () {
        return global.isWatching = true;
    });
})();
