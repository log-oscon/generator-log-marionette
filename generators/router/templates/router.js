(function () {
    'use strict';

    var Backbone = require('backbone');

    var <%= name %>Router = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
            /* your app routes */
        },

        routes : {
            /* backbone-style routes */
        }
    });

    module.exports = <%= name %>Router;
})();
