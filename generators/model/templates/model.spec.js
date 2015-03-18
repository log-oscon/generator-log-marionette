'use strict';

var <%= name %> = require.main.require('src/scripts/app/models/<%= path %>');

describe('<%= name %>', function () {
    var model;

    it('should do something', function () {
        model = new <%= name %>();
    });
});
