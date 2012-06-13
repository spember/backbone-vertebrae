// This section should be included first
var MyApp = {
	Collections: {},
	Models: {},
	Settings: {},
	Templates: {},
	Utils: {},
	Views: {},

	// set up a object to hold instance values, as well as act as a central event dispatching location
	instance: new function () {
	    // extending our instance object with Backbone.Events gives us a convenient place to fire and listen for 'global'
	    // events within our namespace
	    _.extend(this, Backbone.Events);
	},

	// function to be executed by head.js once the files are loaded
	headComplete: function () {
		// trigger an event on instance
		// development environments should listen for 'load:complete' on MyApp.instance to kick off the festivities
		this.instance.trigger("load:complete");
	}
};

/********
 BEGIN CUSTOM CODE
********/
// production environments could call this directly; we use an event listener on headComplete for dev environments
MyApp.init = function () {
	//display our one view
	$("body").html(new MyApp.Views.Header().render().$el)
}
// set up listener for headComplete
MyApp.instance.on("load:complete", function () {
	MyApp.init();
})
