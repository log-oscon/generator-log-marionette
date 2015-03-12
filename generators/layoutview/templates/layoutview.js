(function () {
    'use strict';

    var Backbone = require('backbone');

    var <%= name %>View = Backbone.Marionette.LayoutView.extend({
        template: require('app/templates/<%= path %>'),
        tagName:  'div id="<%= canonical %>-view"',

        regions: {
            /* your regions */
        },

        events: {
            /* your event hooks */
        }
    });

    return <%= name %>View;
})();
