(function () {
    'use strict';

    var Backbone = require('backbone');

    module.exports = Backbone.Marionette.LayoutView.extend({
        el: 'body',
        template: require('app/templates/root'),
        regions: {
            main: '#main'
        }
    });
})();
