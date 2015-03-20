(function () {
    'use strict';

    var Marionette = require('backbone.marionette'),
        <%= child %>View = require('app/views/<%= child_path %>-view');

    var <%= name %>View = Marionette.CompositeView.extend({
        template:       require('app/templates/<%= path %>'),
        tagName:        'div data-id="<%= canonical %>-view"',
        childView:      <%= child %>View,
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
