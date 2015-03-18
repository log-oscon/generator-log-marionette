'use strict';

var utils     = require('../utils'),
    sinon     = require('sinon'),
    generator = require('yeoman-generator'),
    assert    = require('yeoman-generator').assert;

describe('log-marionette:collection', function () {
    before(function (done) {
        utils.runSubGenerator('../generators/collection', {
            args: ['logs'],
            done: done
        });
    });

    it('should create src and spec', function () {
        assert.file([
            'src/scripts/app/collections/logs.js',
            'src/tests/specs/collections/logs.spec.js'
        ]);
    });

    it('should set the src and spec contents', function () {
        assert.fileContent('src/scripts/app/collections/logs.js', /Log = require\('app\/models\/log'\);/);
        assert.fileContent('src/scripts/app/collections/logs.js', /var Logs = Backbone.Collection.extend\(\{/);
        assert.fileContent('src/scripts/app/collections/logs.js', /model: Log/);
        assert.fileContent('src/scripts/app/collections/logs.js', /module.exports = Logs;/);

        assert.fileContent('src/tests/specs/collections/logs.spec.js', /var Logs = require.main.require\('src\/scripts\/app\/collections\/logs'\);/);
        assert.fileContent('src/tests/specs/collections/logs.spec.js', /describe\('Logs'/);
        assert.fileContent('src/tests/specs/collections/logs.spec.js', /collection = new Logs\(\)/);
    });

    describe('when passing the all option', function () {
        var spy, dummy;

        before(function (done) {
            spy   = sinon.spy();
            dummy = generator.Base.extend({
                exec: spy
            });

            utils.runSubGenerator('../generators/collection', {
                args:       ['logs'],
                options:    { all: true },
                generators: [[dummy, 'log-marionette:model']],
                done:       done
            });
        });

        it('should compose with log-marionette:model', function () {
            assert(spy.calledOnce);
        });
    });
});
