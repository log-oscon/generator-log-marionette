(function () {
    'use strict';

    var Marionette = require('backbone.marionette');

    var <%= name %>View = Marionette.ItemView.extend({
        template: require('app/templates/<%= path %>'),
        tagName:  'div data-id="<%= canonical %>-view"',

        events: {
            /* your event hooks */
        }
    });

    module.exports = <%= name %>View;
})();
