(function () {
    'use strict';

    var <%= name %> = require('app/collections/<%= path %>');

    describe('<%= name %>', function() {
        var collection;

        it('should do something', function() {
            collection = new <%= name %>();
        });
    });
})();
