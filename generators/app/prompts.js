'use strict';

function notEmpty(src) {
    return !!src;
}

module.exports = [{
    type:    'input',
    name:    'name',
    message: 'Project Name',
    validate: notEmpty
}, {
    type:     'input',
    name:     'description',
    message:  'Description',
    validate: notEmpty
}, {
    type: 'list',
    name: 'engine',
    message: 'Which templating engine?',
    choices: [{
        name:  'Handlebars',
        value: 'handlebars'
    }, {
        name:  'DustJS',
        value: 'dust'
    }],
    default: 'handlebars'
}];
