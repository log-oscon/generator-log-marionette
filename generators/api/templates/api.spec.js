'use strict';

var <%= name %>Api = require.main.require('src/scripts/app/apis/<%= path %>-api');

describe('<%= name %>Api', function () {
    var api;

    it('should do something', function () {
        api = new <%= name %>Api();
    });
});

