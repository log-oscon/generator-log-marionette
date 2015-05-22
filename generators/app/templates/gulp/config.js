(function () {
    'use strict';

    var debug = true,
        src   = './src',
        dest  = './public';

    require('./util/node-path');

    module.exports = {
        src: src,
        dest: dest,
        environment: {
            debug: debug
        },
        sass: {
            src: src + '/styles/*.{sass,scss}',
            dest: dest + '/css',
            settings: {
                sourceComments: (function () {
                    if (debug) {
                        return 'map';
                    }
                })(),
                imagePath: dest + '/images',
                includePaths: []
            }
        },
        autoprefixer: {
            browsers: ['last 2 versions']
        },
        images: {
            src: src + '/images/**',
            dest: dest + '/images'
        },
        phpunit: {
            watch: '/**/*.php',
            src: './test/phpunit/**/*.test.php'
        },
        jasmine: {
            watch: dest + '/**/*.js',
            specs: dest + '/specs.js'
        },
        jshint: {
            src: src + '/scripts/**/*.js',
            reporter: 'jshint-stylish'
        },
        browserSync: {
            server: {
                baseDir: [dest, src]
            },
            files: ['**/*.php', dest + '/**', '!' + dest + '/**.map']
        },
        browserify: {
            debug: debug,
            extensions: ['.cson', '.yaml', '.json', '.hbs', '.dust'],
            bundleConfigs: [{
                entries: src + '/scripts/main.js',
                dest: dest + '/js',
                outputName: 'main.js',
                vendor: false
            }, {
                dest: dest + '/js',
                outputName: 'infrastructure.js',
                vendor: true
            }, {
                entries: './test/jasmine/**/*.spec.js',
                dest: dest + '/test',
                outputName: 'specs.js'
            }]
        }
    };
})();
