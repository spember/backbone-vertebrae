// This is a sample header 
MyApp.Views.Header = Backbone.View.extend({
	
	render: function () {
		this.$el.append(MyApp.Templates.header());
		return this;
	}
});