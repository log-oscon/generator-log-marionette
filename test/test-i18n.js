'use strict';

var utils  = require('../utils'),
    assert = require('yeoman-generator').assert;

describe('log-marionette:i18n', function () {
    before(function (done) {
        utils.runSubGenerator('../generators/i18n', {
            args: ['header'],
            done: done
        });
    });

    it('should create the i18n file', function () {
        assert.file([
            'src/i18n/en/header.json'
        ]);
    });

    describe('when passing langs', function () {
        before(function (done) {
            utils.runSubGenerator('../generators/i18n', {
                args: ['header'],
                options: {
                    'lang': 'pt,en,es'
                },
                done: done
            });
        });

        it('should create the i18n files in the given langs', function () {
            assert.file([
                'src/i18n/en/header.json',
                'src/i18n/pt/header.json',
                'src/i18n/es/header.json'
            ]);
        });
    });
});
