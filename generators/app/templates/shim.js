'use strict';

module.exports = {
    'jquery': '$',
    'underscore': '_',
    'backbone': {
        'exports': 'Backbone',
        'depends': {
            'jquery': '$',
            'underscore': '_'
        }
    },
    'backbone.marionette': {
        'exports': 'Marionette',
        'depends': {
            'backbone': 'Backbone',
            'backbone.wreqr': 'Backbone.Wreqr',
            'backbone.babysitter': 'Backbone.BabySitter'
        }
    }
};
