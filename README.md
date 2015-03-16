> [Yeoman](http://yeoman.io) generator

## What it is

It will generate a base Marionette project with Browserify, specs and Gulp file. 
Also, it will generate all the base components of a Marionette project - such as ItemView's, Models, etc.

## Installation

Please read [Yeoman docs](http://yeoman.io) for Yeoman installation.

`npm install -g generator-log-marionette` - not npm available...yet :)

## Bootstrap

`yo log-marionette` will generate a `package.json` with the specified dependencies , an `.editorconfig`, a `.gitignore`, a `.jshintrc` and will create the following directories and files: e criar as seguintes directorias e ficheiros:

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

## License

MIT
