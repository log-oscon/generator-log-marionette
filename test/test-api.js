'use strict';

var utils  = require('../utils'),
    assert = require('yeoman-generator').assert;

describe('log-marionette:api', function () {
    before(function (done) {
        utils.runSubGenerator('../generators/api', {
            args: ['log'],
            done: done
        });
    });

    it('should create src and spec', function () {
        assert.file([
            'src/scripts/app/apis/log-api.js',
            'src/tests/specs/apis/log-api.spec.js'
        ]);
    });

    it('should set the src and spec contents', function () {
        assert.fileContent('src/scripts/app/apis/log-api.js', /var LogApi = Marionette.Controller.extend/);
        assert.fileContent('src/scripts/app/apis/log-api.js', /module.exports = LogApi;/);

        assert.fileContent('src/tests/specs/apis/log-api.spec.js', /var LogApi = require\('app\/apis\/log-api'\);/);
        assert.fileContent('src/tests/specs/apis/log-api.spec.js', /describe\('LogApi'/);
        assert.fileContent('src/tests/specs/apis/log-api.spec.js', /api = new LogApi\(\)/);
    });
});
