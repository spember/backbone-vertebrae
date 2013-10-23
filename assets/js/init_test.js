var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/assets/js',

    paths: {
        
        underscore: 'libs/bower_components/underscore/underscore-min',
        handlebars: 'libs/bower_components/handlebars/handlebars',
        backbone: 'libs/bower_components/backbone/backbone-min',
        zepto: 'libs/bower_components/zepto/zepto.min',
        templates: 'app/templates/hbs-compiled'
    },
    // in order to load non-AMD js, we have to shim it
    shim: {
        "zepto": {
            deps: [],
            exports: "$"
        },
        "underscore": {
            deps: ["zepto"],
            exports: "_"
        },
        "handlebars": {
            deps: ["zepto"],
            exports: "Handlebars"
        },
        "templates": {
            deps: ["handlebars"],
            exports: "templates"
        },
        "backbone": {
            deps: ["underscore", "zepto", "handlebars"],
            exports: "Backbone"  //attaches "Backbone" to the window object
        },
    
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});