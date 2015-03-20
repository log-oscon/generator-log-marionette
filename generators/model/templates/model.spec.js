'use strict';

var <%= name %> = require('app/models/<%= path %>');

describe('<%= name %>', function () {
    var model;

    it('should do something', function () {
        model = new <%= name %>();
    });
});
