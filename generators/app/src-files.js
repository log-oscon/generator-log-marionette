'use strict';

module.exports = {
    files: function (generator) {
        var ext = generator.config.get('engine') === 'dust' ? 'dust' : 'hbs';
        return [
            {
                src: 'marionette/main.js',
                dst: 'src/scripts/main.js'
            },
            {
                src: 'marionette/app.js',
                dst: 'src/scripts/app/app.js'
            },
            {
                src: 'marionette/radio.js',
                dst: 'src/scripts/app/radio.js'
            },
            {
                src: 'marionette/behaviors.js',
                dst: 'src/scripts/app/behaviors/behaviors.js'
            },
            {
                src: 'marionette/root-view.js',
                dst: 'src/scripts/app/views/root-view.js'
            },
            {
                src: 'marionette/root.html',
                dst: 'src/scripts/app/templates/root.' + ext
            }
        ];
    }
};
