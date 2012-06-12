// This section should be included first
var MyApp = {
	Collections: {},
	Models: {},
	Settings: {},
	Templates: {},
	Utils: {},
	Views: {},

	// set up a object to hold instance values
	instance: new function () {
	    // extending our instance object with Backbone.Events gives us a convenient place to fire and listen for 'global'
	    // events within our namespace
	    _.extend(this, Backbone.Events);
	
	}
};

// Below are custom code that should be changed
MyApp.init = function () {
	//display our one view
	$("body").html(new MyApp.Views.Header().render().$el)

}