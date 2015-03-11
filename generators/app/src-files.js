'use strict';

module.exports = {
    files: function (generator) {
        var ext = generator.config.get('engine') === 'dust' ? '.dust' : 'hbs';
        return [
            {
                src: 'main.js',
                dst: 'src/scripts/main.js'
            },
            {
                src: 'app.js',
                dst: 'src/scripts/app/app.js'
            },
            {
                src: 'radio.js',
                dst: 'src/scripts/app/radio.js'
            },
            {
                src: 'behaviors.js',
                dst: 'src/scripts/app/behaviors/behaviors.js'
            },
            {
                src: 'root-view.js',
                dst: 'src/scripts/app/views/root-view.js'
            },
            {
                src: 'root.html',
                dst: 'src/scripts/app/templates/root.' + ext
            }
        ];
    }
};
