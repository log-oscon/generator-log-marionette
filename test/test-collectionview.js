'use strict';

var utils     = require('../utils'),
    sinon     = require('sinon'),
    generator = require('yeoman-generator'),
    assert    = require('yeoman-generator').assert;

describe('log-marionette:collectionview', function () {
    before(function (done) {
        utils.runSubGenerator('../generators/collectionview', {
            args: ['logs'],
            done: done
        });
    });

    it('should create src and spec', function () {
        assert.file([
            'src/scripts/app/views/logs-view.js',
            'src/tests/specs/views/logs-view.spec.js'
        ]);
    });

    it('should set the src and spec contents', function () {
        assert.fileContent('src/scripts/app/views/logs-view.js', /LogView = require\('app\/views\/log-view'\)/);
        assert.fileContent('src/scripts/app/views/logs-view.js', /var LogsView = Marionette/);
        assert.fileContent('src/scripts/app/views/logs-view.js', /tagName:   'div data-id="logs-view"'/);
        assert.fileContent('src/scripts/app/views/logs-view.js', /childView: LogView/);
        assert.fileContent('src/scripts/app/views/logs-view.js', /module.exports = LogsView;/);

        assert.fileContent('src/tests/specs/views/logs-view.spec.js', /var LogsView = require\('app\/views\/logs-view'\);/);
        assert.fileContent('src/tests/specs/views/logs-view.spec.js', /describe\('LogsView'/);
        assert.fileContent('src/tests/specs/views/logs-view.spec.js', /view = new LogsView\(\)/);
    });

    describe('when passing the all option', function () {
        var spy, dummy;

        before(function (done) {
            spy   = sinon.spy();
            dummy = generator.Base.extend({
                exec: spy
            });

            utils.runSubGenerator('../generators/collectionview', {
                args:       ['log'],
                options:    { all: true },
                generators: [[dummy, 'log-marionette:itemview']],
                done:       done
            });
        });

        it('should compose with log-marionette:itemview', function () {
            assert(spy.calledOnce);
        });
    });
});
