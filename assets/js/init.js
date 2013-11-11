// set up epsilon namespace skeleton
window.myNamespace = {
    templates: {},
    data: {}
};

require.config({
    // remove this once it's go time
    urlArgs: "bust=" + (new Date()).getTime(),
    
    baseUrl: '/assets/js',
    paths: {
        
        underscore: 'libs/bower_components/underscore/underscore-min',
        handlebars: 'libs/bower_components/handlebars/handlebars',
        backbone: 'libs/bower_components/backbone/backbone-min',
        zepto: 'libs/bower_components/zepto/zepto.min',
        helpers: 'app/templates/hbs-helpers',
        templates: 'app/templates/hbs-compiled',
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
            deps: ["helpers"],
            exports: "templates"
        },
        "backbone": {
            deps: ["underscore", "zepto", "handlebars"],
            exports: "Backbone"  //attaches "Backbone" to the window object
        },
    }
});

require( [
    'zepto',
    'backbone',
    'handlebars',
    'app/views/index'
    ], function ($, Backbone, hbs, indexView) {
        _.extend(myNamespace, Backbone.Events);
        
        var view = new indexView().render();
        $(".temporary").remove();
        $("body").prepend(view.$el);
    });