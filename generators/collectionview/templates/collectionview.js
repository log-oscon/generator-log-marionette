(function () {
    'use strict';

    var Marionette = require('backbone.marionette'),
        <%= child %>View = require('app/views/<%= path %>-view');

    var <%= name %>View = Marionette.CollectionView.extend({
        tagName:   'div data-id="<%= canonical %>-view"',
        childView: <%= child %>View
    });

    module.exports = <%= name %>View;
})();
