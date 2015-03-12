(function () {
    'use strict';

    var Backbone = require('backbone'),
        <%= child %>View = require('app/views/<%= path %>');

    var <%= name %>View = Backbone.Marionette.CollectionView.extend({
        childView: <%= child %>View
    });

    module.exports = <%= name %>View;
})();
