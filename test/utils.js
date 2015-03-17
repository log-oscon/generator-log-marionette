'use strict';

var path    = require('path'),
    os      = require('os'),
    helpers = require('yeoman-generator').test;

module.exports = {
    runGenerator: function (generator, promptAnswers, done) {
        helpers.run(path.join(__dirname, generator))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withOptions({
                'skip-install': true
            })
            .withPrompt(promptAnswers)
            .on('end', done);
    }
};
