// inject the needed modules
define(["templates", "backbone"], function(templates, Backbone) {
	// because they're loaded asynchronously, we cannot guarantee they'll be 
	// ready until the return object is parsed
	return Backbone.View.extend({
		// it's minor, but by injecting the templates object we do not have 
		// to worry about the namespace structure
		
		template: templates.index,
		className: "content",
		render: function() {
			this.$el.append(this.template());
			return this;
		}
	});
});