define(["templates", "backbone"], function(templates, Backbone) {
	return Backbone.View.extend({
		template: templates.index,
		className: "content",
		render: function() {
			this.$el.append(this.template());
			return this;
		}
	});
});