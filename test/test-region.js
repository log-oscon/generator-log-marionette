'use strict';

var utils  = require('../utils'),
    assert = require('yeoman-generator').assert;

describe('log-marionette:region', function () {
    before(function (done) {
        utils.runSubGenerator('../generators/region', {
            args: ['log'],
            done: done
        });
    });

    it('should create src file', function () {
        assert.file([
            'src/scripts/app/regions/log-region.js'
        ]);
    });

    it('should set the src contents', function () {
        assert.fileContent('src/scripts/app/regions/log-region.js', /var LogRegion = Marionette.Region.extend/);
        assert.fileContent('src/scripts/app/regions/log-region.js', /el: '#log-region'/);
        assert.fileContent('src/scripts/app/regions/log-region.js', /module.exports = LogRegion;/);
    });
});
