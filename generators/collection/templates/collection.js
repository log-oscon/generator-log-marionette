(function () {
    'use strict';

    var Backbone = require('backbone'),
        <%= model %> = require('app/models/<%= path %>');

    var <%= name %> = Backbone.Collection.extend({
        model: <%= model %>
    });

    module.exports = <%= name %>;
})();
