(function () {
    'use strict';

    <% if (!extend) {%>var Marionette = require('backbone.marionette');
    <% } else {%>var <%= extend %>Controller = require('app/controllers/<%= extend_path %>-controller');<%}%>

    var <%= name %>Controller = <% if (!extend) {%>Marionette.<%} else {%><%= extend %><%}%>Controller.extend({
        /* your code */
    });

    module.exports = <%= name %>Controller;
})();
