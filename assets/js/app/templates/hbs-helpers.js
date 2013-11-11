/*globals define */
define(['handlebars'], function(Handlebars) {
    "use strict";
    Handlebars.registerHelper('info', function() {
        return "<p>This paragraph was brought to you by <a href=\"http://handlebarsjs.com\">Handlebars JS</a> helpers</p>";
    });
});