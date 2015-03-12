(function () {
    'use strict';

    var Backbone = require('backbone'),
        <%= child %>View = require('app/views/<%= child_path %>');

    var <%= name %>View = Backbone.Marionette.CompositeView.extend({
        template:        require('app/templates/<%= path %>'),
        childView:       <%= child %>View,
        childContainer: '#<%= canonical %>-container',

        events: {
            /* your event hooks */
        },

        templateHelpers: function () {
            return {
                /* your helpers */
            };
        }
    });

    module.exports = <%= name %>View;
})();
