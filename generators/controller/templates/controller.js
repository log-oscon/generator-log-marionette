(function () {
    'use strict';

    <% if (!extend) {%>var Backbone = require('backbone');
    <% } else {%>var <%= extend %>Controller = require('app/controllers/<%= extend_path %>-controller');<%}%>

    var <%= name %>Controller = <% if (!extend) {%>Backbone.Marionette.<%} else {%><%= extend %><%}%>Controller.extend({
        /* your code */
    });

    module.exports = <%= name %>Controller;
})();
