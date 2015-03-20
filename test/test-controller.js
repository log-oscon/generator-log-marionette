'use strict';

var utils     = require('../utils'),
    sinon     = require('sinon'),
    generator = require('yeoman-generator'),
    assert    = require('yeoman-generator').assert;

describe('log-marionette:controller', function () {
    before(function (done) {
        utils.runSubGenerator('../generators/controller', {
            args: ['log'],
            done: done
        });
    });

    it('should create src and spec', function () {
        assert.file([
            'src/scripts/app/controllers/log-controller.js',
            'src/tests/specs/controllers/log-controller.spec.js'
        ]);
    });

    it('should set the src and spec contents', function () {
        assert.fileContent('src/scripts/app/controllers/log-controller.js', /var Marionette = require\('backbone.marionette'\);/);
        assert.fileContent('src/scripts/app/controllers/log-controller.js', /var LogController = Marionette.Controller.extend/);
        assert.fileContent('src/scripts/app/controllers/log-controller.js', /module.exports = LogController;/);

        assert.fileContent('src/tests/specs/controllers/log-controller.spec.js', /var LogController = require\('app\/controllers\/log-controller'\);/);
        assert.fileContent('src/tests/specs/controllers/log-controller.spec.js', /describe\('LogController'/);
        assert.fileContent('src/tests/specs/controllers/log-controller.spec.js', /controller = new LogController\(\)/);
    });

    describe('when passing the extend option', function () {
        var spy, dummy;

        before(function (done) {
            spy   = sinon.spy();
            dummy = generator.Base.extend({
                exec: spy
            });

            utils.runSubGenerator('../generators/controller', {
                args:    ['log'],
                options: { extend: 'another' },
                done:    done
            });
        });

        it('should set the src contents', function () {
            assert.fileContent('src/scripts/app/controllers/log-controller.js', /var AnotherController = require\('app\/controllers\/another-controller'\);/);
            assert.fileContent('src/scripts/app/controllers/log-controller.js', /var LogController = AnotherController.extend/);
            assert.fileContent('src/scripts/app/controllers/log-controller.js', /module.exports = LogController;/);
        });
    });
});
