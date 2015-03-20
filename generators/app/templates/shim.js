'use strict';

module.exports = {
    'jquery': '$',
    'lodash': '_',
    'backbone': {
        'exports': 'Backbone',
        'depends': {
            'jquery': '$',
            'lodash': '_'
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
