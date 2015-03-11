(function () {
    'use strict';

    var <%= name %>View = require('app/views/<%= path %>');

    describe('<%= name %>View', function() {
        var view;

        it('should do something', function() {
            view = new <%= name %>View();
        });
    });
})();
