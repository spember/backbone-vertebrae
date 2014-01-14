// set up epsilon namespace skeleton
window.myNamespace = {
    templates: {},
    data: {},
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
    // in order to load non-AMD js 'window global' scripts, we have to shim it
    shim: {
        "zepto": {
            deps: [],
            exports: "$" // exports acts as the reference to the location we can find the object. 
        },
        "underscore": {
            deps: ["zepto"],
            exports: "_"
        },
        "handlebars": {
            deps: ["zepto"],
            exports: "Handlebars"
        },
        // this specification is somewhat redundant as we specify the location in the Grunt config, however, doing this here
        // allows us to specify dependencies (e.g., the helpers). Note that we do not need the exports nor the specific 'deps'
        // declaration. This pattern is used for things that only have dependencies and are injected appropriately elsewhere
        // For example, jQuery plugins should find their own path ($.fn), and the grunt config for the compiled templates 
        // specifies the namespace
        "templates": {
            deps: ["helpers"]
        },

        "backbone": {
            deps: ["underscore", "zepto", "handlebars"],
            exports: "Backbone"
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