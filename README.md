# Marionette.js generator [![Build Status](https://travis-ci.org/log-oscon/generator-log-marionette.svg)](https://travis-ci.org/log-oscon/generator-log-marionette)

> [Yeoman](http://yeoman.io) generator 

## What it is

It will generate a base Marionette project with Browserify, specs and Gulp tasks. 
Also, it will generate all the base components of a Marionette project - such as ItemView's, Models, etc.

## Installation

Please read [Yeoman docs](http://yeoman.io) for Yeoman installation.

`npm install -g generator-log-marionette`

## Bootstrap

`yo log-marionette` will generate a `package.json` with the specified dependencies , an `.editorconfig`, a `.gitignore`, a `.jshintrc` and will create the following directories and files:

* tasks/
* src/
  * images/
  * fonts/
  * styles/
  * scripts/
      * `main.js` - application bootstrap
      * app/
          * `app.js` - basic definition of `Backbone.Marionette.Application`;
          * `radio.js` - basic definition of `Radio` with a predefined `global` channel;
          * behaviors/
              * `behaviors.js` - placeholder for other `Behavior`;
          * collections/ 
          * models/
          * controllers/
          * routers/
          * apis/
          * views/
              * `root-view.js` - view used by `app.js` as a view placeholder
          * templates/
               * `root.(hbs|dust)` - `root-view.js` template
          * regions/

  * tests/
      * app/
          * collections/
          * models/
          * controllers/
          * routers/
          * apis/
          * views/

All `package.json` will be automatically installed

## Generators

You can see a list of possible generators by typing: `yo --help`. In this case you will receive the following list - alongside other generators:

```
log-marionette
    behavior
    collection
    collectionview
    composite-template
    compositeview
    controller
    itemview
    layoutview
    model
    region
    router
    template
```

Bear in mind, `composite-template` **IS NOT** supposed to be used. It is only used internally by `compositeview`.

You can see each sub-generator and its options by typing: `yo log-marionette:[generator] --help`. E.g.: by typing `yo log-marionette:compositeview --help` it will return:

```
Usage:
  yo log-marionette:compositeview [options] <name>

Options:
  -h,   --help        # Print the generator's options and usage
        --skip-cache  # Do not remember prompt answers                               Default: false
        --all         # should also create its corresponding template and itemviews

Arguments:
  name    Type: String  Required: true
```

A few points on naming conventions; when generating a model or a collection, the input name will be the file name, e.g.: `yo log-marionette:model my-name` will generate a `my-name.js` file with the following code:

```
(function () {
    'use strict';

    var Backbone = require('backbone');

    var MyName = Backbone.Model.extend({});

    module.exports = MyName;
})();

```

In all other cases a suffix will be added to the name file and the generated object, e.g.: `yo log-marionette:behavior my-name` will generate a `my-name-behavior.js` file with the following contents:

```
(function () {
    'use strict';

    var Marionette = require('backbone.marionette');

    var MyNameBehavior = Marionette.Behavior.extend({
        defaults: {
            /* your defaults */
        },

        events: {
            /* your events */
        }
    });

    module.exports = MyNameBehavior;
})();

```

## License

MIT
