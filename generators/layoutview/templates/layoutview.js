(function () {
    'use strict';

    var Marionette = require('backbone.marionette');

    var <%= name %>View = Marionette.LayoutView.extend({
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
