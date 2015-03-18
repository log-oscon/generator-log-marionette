'use strict';

var utils  = require('../utils'),
    assert = require('yeoman-generator').assert;

describe('log-marionette:model', function () {
    before(function (done) {
        utils.runSubGenerator('../generators/model', {
            args: ['log'],
            done: done
        });
    });

    it('should create src and spec', function () {
        assert.file([
            'src/scripts/app/models/log.js',
            'src/tests/specs/models/log.spec.js'
        ]);
    });

    it('should set the src and spec contents', function () {
        assert.fileContent('src/scripts/app/models/log.js', /var Log = Backbone.Model.extend\(\{\}\);/);
        assert.fileContent('src/scripts/app/models/log.js', /module.exports = Log;/);

        assert.fileContent('src/tests/specs/models/log.spec.js', /var Log = require.main.require\('src\/scripts\/app\/models\/log'\);/);
        assert.fileContent('src/tests/specs/models/log.spec.js', /describe\('Log'/);
        assert.fileContent('src/tests/specs/models/log.spec.js', /model = new Log\(\)/);
    });
});
