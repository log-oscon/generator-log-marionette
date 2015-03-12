(function () {
    'use strict';

    var Marionette = require('backbone.marionette');

    var <%= name %>Behavior = Marionette.Behavior.extend({
        defaults: {
            /* your defaults */
        },

        events: {
            /* your events */
        }
    });

    module.exports = <%= name %>Behavior;
})();
