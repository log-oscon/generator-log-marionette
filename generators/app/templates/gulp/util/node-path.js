(function () {
    'use strict';

    var path = require('path');

    module.exports = function (relativePath) {
        return path.join(__dirname, '../../node_modules', relativePath);
    };

})();
