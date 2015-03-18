'use strict';

var utils  = require('../utils'),
    assert = require('yeoman-generator').assert;

describe('log-marionette:router', function () {
    before(function (done) {
        utils.runSubGenerator('../generators/router', {
            args: ['log'],
            done: done
        });
    });

    it('should create src file', function () {
        assert.file([
            'src/scripts/app/routers/log-router.js'
        ]);
    });

    it('should set the src contents', function () {
        assert.fileContent('src/scripts/app/routers/log-router.js', /var LogRouter = Backbone.Marionette.AppRouter.extend/);
        assert.fileContent('src/scripts/app/routers/log-router.js', /module.exports = LogRouter;/);
    });
});
