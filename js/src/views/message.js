// This is a simple message view
MyApp.Views.Message = Backbone.View.extend({
	
	initialize: function(options) {
		this.text = options.text;
	},

	render: function () {
		this.$el.append(MyApp.Templates.message({text:this.text}));
		return this;
	}
});