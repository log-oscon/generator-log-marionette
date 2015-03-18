(function () {
    'use strict';

    var Backbone = require('backbone');

    var <%= name %>View = Backbone.Marionette.ItemView.extend({
        template: require('app/templates/<%= path %>'),
        tagName:  'div data-id="<%= canonical %>-view"',

        events: {
            /* your event hooks */
        }
    });

    module.exports = <%= name %>View;
})();
