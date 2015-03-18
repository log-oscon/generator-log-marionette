(function () {
    'use strict';

    var Backbone = require('backbone');

    var <%= name %>View = Backbone.Marionette.LayoutView.extend({
        template: require('app/templates/<%= path %>'),
        tagName:  'div data-id="<%= canonical %>-view"',

        regions: {
            /* your regions */
        },

        events: {
            /* your event hooks */
        }
    });

    module.exports = <%= name %>View;
})();
