'use strict';

var utils  = require('../utils'),
    assert = require('yeoman-generator').assert;

describe('log-marionette:template', function () {
    before(function (done) {
        utils.runSubGenerator('../generators/template', {
            args: ['log'],
            done: done
        });
    });

    it('should create the template', function () {
        assert.file([
            'src/scripts/app/templates/log.dust'
        ]);
    });
});
