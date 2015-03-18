'use strict';

var <%= name %> = require.main.require('src/scripts/app/collections/<%= path %>');

describe('<%= name %>', function () {
    var collection;

    it('should do something', function () {
        collection = new <%= name %>();
    });
});
