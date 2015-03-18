'use strict';

var utils     = require('../utils'),
    sinon     = require('sinon'),
    generator = require('yeoman-generator'),
    assert    = require('yeoman-generator').assert;

describe('log-marionette:layoutview', function () {
    before(function (done) {
        utils.runSubGenerator('../generators/layoutview', {
            args: ['log'],
            done: done
        });
    });

    it('should create src and spec', function () {
        assert.file([
            'src/scripts/app/views/log-view.js',
            'src/tests/specs/views/log-view.spec.js'
        ]);
    });

    it('should set the src and spec contents', function () {
        assert.fileContent('src/scripts/app/views/log-view.js', /var LogView = Backbone.Marionette/);
        assert.fileContent('src/scripts/app/views/log-view.js', /template: require\('app\/templates\/log'\)/);
        assert.fileContent('src/scripts/app/views/log-view.js', /tagName:  'div data-id="log-view"'/);
        assert.fileContent('src/scripts/app/views/log-view.js', /module.exports = LogView;/);

        assert.fileContent('src/tests/specs/views/log-view.spec.js', /var LogView = require.main.require\('src\/scripts\/app\/views\/log-view'\);/);
        assert.fileContent('src/tests/specs/views/log-view.spec.js', /describe\('LogView'/);
        assert.fileContent('src/tests/specs/views/log-view.spec.js', /view = new LogView\(\)/);
    });

    describe('when passing the all option', function () {
        var spy, dummy;

        before(function (done) {
            spy   = sinon.spy();
            dummy = generator.Base.extend({
                exec: spy
            });

            utils.runSubGenerator('../generators/layoutview', {
                args:       ['log'],
                options:    { all: true },
                generators: [[dummy, 'log-marionette:template']],
                done:       done
            });
        });

        it('should compose with log-marionette:template', function () {
            assert(spy.calledOnce);
        });
    });
});
