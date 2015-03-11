(function () {
    'use strict';

    var Backbone = require('backbone');

    var <%= name %>View = Backbone.Marionette.ItemView.extend({
        template: require('app/templates/<%= path %>'),
        tagName:  'div id="<%= name.charAt(0).toLowerCase() + name.slice(1) %>-view"',
        events: {
            /* your event hooks */
        }
    });

    return <%= name %>View;
})();
