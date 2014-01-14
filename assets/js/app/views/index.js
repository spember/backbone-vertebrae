// inject the needed modules
define(["templates", "backbone", "app/models/foo"], function(templates, Backbone, Foo) {
    // because they're loaded asynchronously, we cannot guarantee they'll be 
    // ready until the return object is parsed
    return Backbone.View.extend({
        // it's minor, but by injecting the templates object we do not have 
        // to worry about the namespace structure
        
        template: templates.index,
        className: "content",

        initialize:  function() {
            // pointlessly creating a new Foo that we'll never use, as an example of using an injected module
            var foo = new Foo();
        },
        
        render: function() {
            this.$el.append(this.template());
            return this;
        }
    });
});