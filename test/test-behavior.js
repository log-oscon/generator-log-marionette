'use strict';

var utils  = require('../utils'),
    assert = require('yeoman-generator').assert;

describe('log-marionette:behavior', function () {
    before(function (done) {
        utils.runSubGenerator('../generators/behavior', {
            args: ['log'],
            done: done
        });
    });

    it('should create src file', function () {
        assert.file([
            'src/scripts/app/behaviors/log-behavior.js'
        ]);
    });

    it('should set the src contents', function () {
        assert.fileContent('src/scripts/app/behaviors/log-behavior.js', /var LogBehavior = Marionette.Behavior.extend/);
        assert.fileContent('src/scripts/app/behaviors/log-behavior.js', /module.exports = LogBehavior;/);
    });
});
