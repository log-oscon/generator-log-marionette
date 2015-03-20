'use strict';

var <%= name %>View = require('app/views/<%= path %>-view');

describe('<%= name %>View', function () {
    var view;

    it('should do something', function () {
        view = new <%= name %>View();
    });
});
