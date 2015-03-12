(function () {
    'use strict';

    var notify = require('gulp-notify');

    module.exports = function (error) {
        notify.onError({
            title: 'Compile Error',
            message: error
        }).apply(this, arguments);

        return this.emit('end');
    };

})();
