(function () {
    'use strict';

    var $        = require('jquery'),
        Backbone = require('backbone');

    Backbone.$          = $;
    Backbone.Radio      = require('backbone.radio');
    Backbone.Marionette = require('backbone.marionette');

    require('app/behaviors/behaviors');

    var moment   = require('moment'),
        Radio    = require('app/radio'),
        RootView = require('app/views/root-view'),
        App;

    App = new Backbone.Marionette.Application({});

    App.addInitializer(function () {
        this.rootView  = new RootView();
        this.rootView.render();
    });

    App.addInitializer(function () {
        this.routers = {
            /* your routers */
        };

        if (Backbone.history) {
            Backbone.history.start();
        }
    });

    App.addInitializer(function () {
        // Define moment locale
        moment.locale('pt');
    });

    Radio.global.reply('main:region', function () {
        return App.rootView.main;
    });

    module.exports = App;
})();
