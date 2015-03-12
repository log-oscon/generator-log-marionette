(function () {
    'use strict';

    var <%= name %>Controller = require('app/controllers/<%= path %>-controller');

    describe('<%= name %>Controller', function() {
        var controller;

        it('should do something', function() {
            controller = new <%= name %>Controller();
        });
    });
})();
