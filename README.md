> [Yeoman](http://yeoman.io) generator

## Installation

`npm install -g generator-log-fe` - this is not reachable...yet :)

## Bootstrap

`yo log-fe` will generate a `package.json` with the specified dependencies , an `.editorconfig`, a `.gitignore`, a `.jshintrc` and will create the following directories and files: e criar as seguintes directorias e ficheiros:

* tasks/
* src/:
  * images/;
  * fonts/;
  * styles/;
  * scripts/:

      * `main.js` - application bootstrap
      * app/:

          * `app.js` - basic definition of `Backbone.Marionette.Application`;
          * `radio.js` - basic definition of `Radio` with a predefined `global` channel;
          * behaviors/ :

              * `behaviors.js` - placeholder for other `Behavior`

          * collections/ ; 
          * models/ ;
          * controllers/ ;
          * routers/ ;
          * apis/ ;
          * views/ :

              * `root-view.js` - view used by `app.js` as a view placeholder

          * templates/ :

               * `root.(hbs|dust)` - `root-view.js` template

          * regions/',

  * tests/:

      * app/:

          * collections/;
          * models/;
          * controllers/;
          * routers/;
          * apis/;
          * views/.

All `package.json` will be automatically installed

## Generators

You can see a list of possible generators by typing: `yo --help`. In this case you will receive the following list - alongside other generators:

```
log-fe
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

Bear in mind, composite-template **IS NOT** supposed to be used. It is only used internally by `compositeview`.

You can see each sub-generator and its options by typing: `yo log-fe:[generator] --help`. E.g.: by typing `yo log-fe:compositeview --help` it will return:

```
Usage:
  yo log-fe:compositeview [options] <name>

Options:
  -h,   --help        # Print the generator's options and usage
        --skip-cache  # Do not remember prompt answers                               Default: false
        --all         # should also create its corresponding template and itemviews

Arguments:
  name    Type: String  Required: true
```

## License

MIT
