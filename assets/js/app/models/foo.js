/*
    Model 'Foo'
*/
define(["backbone"], function(Backbone) {
    
    return Backbone.Model.extend({
        defaults: {
            "count": 0
        },

        validate: function () {
            if (this.get("count") < 0 ) {
                return "Count must be greater than 0";
            }
        }
    });
});