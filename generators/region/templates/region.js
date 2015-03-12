(function () {
    'use strict';

    var Marionette = require('backbone.marionette');

    var <%= name %>Region = Marionette.Region.extend({
        el: '#<%= canonical %>-region'
    });

    module.exports = <%= name %>Region;
})();
