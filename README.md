# Backbone Vertebrae

This goal of this project is to create a basic skeleton / structure for Single Page Web Applications. It's meant to act as a guide / suggestion for building a Front End Javascript application. Vertebrae is a culmination of working on several applications over the past year. I've found this structure to be very useful, and I hope you will too.

### Technologies

I've incorporated the following technologies into the structure which I consider extremely useful for structuring and driving your front end application:

*	[Backbone][backbone]: Thus the title. Brings decently coherent structure to your app
*	[Underscore][underscore]: Required for Backbone; adds some nice convenience methods
*	[Zepto][zepto]: I generally prefer it over jQuery
*	[Handlebars][handlebars]: my favorite JS templating engine; has a nice balance between feature set and being light-weight
*	[RequireJS][require]: Asynchronous module management for your front end code. Really can't say enough good things about it. Once you understand how it works, you'll be writing highly modular, easily testable code in no time.
*	[Sass][sass]: Helps to manage your CSS

Additionally, for development/deployment purposes Vertabrae also includes:

*	[NodeJS][nodejs]: The __only__ way to run your server-side JS. Required by several build tools (e.g. [Grunt][grunt])
*	[Grunt][grunt]: Fantastic JS-based Task Runner. Used to drive just about everything: tests, handlebars 
*	[Karma][karma]: Used to be called 'Testacular'. A JS Test runner that can execute your tests in multiple browsers simultaneously, or go headless via PhantomJS and run in the background
*	[Jasmine][jasmine]: BDD JS testing
*	[Bower][bower]: Package Manager; use to download libraries rather than check into source code

The overall goal of encouraging the usage of a task runner like [Grunt][grunt] is to reinforce and encourage practices from the server-side world to your front end code.

### Overview and Layout

The project is structured such that all static assets go into the 'assets' folder, and are then broken down into CSS and JS (if we had images, fonts, etc, they'd go here as well). The CSS folder is further broken down into an 'scss' folder, containing the individual sass files.

The JS folder contains the meat of the project. Here, we have the following folders: __app__ (application code), __libs__ (third-party libraries, including a sub-folder for [Bower][bower] downloaded code), and __test__ (test code). Within __app__, we break down further into subfolders for 'templates', 'views', 'models', etc. The __test__ app mirrors this structure, but contains "-Spec.js" files.

In addition, __index.html__ gives an example of how to include the libraries to get started.

### Getting Started & Development

1.    Ensure you have [NodeJS][node] (including [NPM](https://npmjs.org/)), [Grunt][grunt], [Bower][bower] and [Sass][sass] installed. Refer to their "getting started" guides to install
1.    Navigate to the project folder, obviously
1.    Configure the project to fit your environment / requirements: Update init.js, init.js, and Gruntfile.js to reflect your chosen project structure if different from this
1.    Install the development dependencies by running: ```npm install``` (Note: I sometimes have to execute this twice for new enivronments)
1.    Install the production dependencies by running: ```bower install``` (Note: update the .bowerrc file to change the bower installation path)

At this point you'll be able to proceed with development. The goal is to keep your code as modular as possible: construct your code in the [AMD][amd] format and rely on [Require][require] to handle module loading.
For example, consider the following View:

```javascript

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

```

This module has no knowledge of the outside components (it doesn't know the 'shape' of other components, like the global namespace), beyond the Backbone View and the name of the template. Furthermore, by setting up this module loading pattern we can create mocks during testing.



### Templates and Markup

All templatized markup should be written in [Handlebars][handlebars] and saved in __assets/js/app/templates/handlebars__. A grunt task will process each .hbs file and pre-compile them into one file, __hbs_compiled.js__


### Tests

All tests should be written as an [AMD][amd] module with [Jasmine][jasmine] syntax. Each file name should end with 'Spec' (e.g. FooSpec.js). See the test folder for an example

### Grunt Tasks

*	```grunt handlebars```: precompile all handlebars templates
*	```grunt sass```: process the .scss files into ```assets/css/style.css```
*	```grunt jshint```: run jsHint through all specified files
*	```grunt requirejs```: compile the source JS files into one file, ```assets/js/compiled-app.js```
*	```grunt karma```: execute the unit tests. By default this uses PhantomJS, and will watch your js files continously. Any change will re-run all tests	
*	```grunt```: the default task will perform ``grunt jshint`` and ``grunt karma``

and finally:

*	```grunt watch```: this will run a continuous process which watches the .scss and .hbs files, then processes them appropriately if anything changes. 

I highly recommend having two terminals open during development, one dedicated to ```grunt watch``` and the other to ``grunt karma```. This will alert you immediately of any broken tests, and will automatically refresh your css and templates without you worrying about it after every change.


### Application Compilation / Production Deployment

The current setup uses [Sass][sass] and the [RequireJS Optimizer][require] to compile the SCSS into CSS and concatinate & minify the source JS files into one main JS file.

While the SASS task is set to run automatically with ```grunt watch```, the JS compilation is not. I recommend using the source files as part of development, but run the complication as part of your dpeloyment build.

Currently, each task only creates one .css and one .js file, but this could be expanded to create several modules, useful in a larger multi-single page app, or if one wants to create multiple 'bundles' of their compiled files for different pages within a larger application (as opposed to loading all JS all the time).

#### Using compiled-app.js

The ```grunt requirejs``` task creates a compiled version at ```assets/js/compiled-app.js```. The test index.html file loads RequireJS, then loads ```assets/js/init.js```, the main configuration / initialization file. 
In order to use the concatenated & minifed version, one must tell Require to load it instead. This is done by editing __index.html__ and replacing:


```<script type="text/javascript" src="/assets/js/libs/bower_components/requirejs/require.js" data-main="/assets/js/init"></script>```

with 

```<script type="text/javascript" src="/assets/js/libs/bower_components/requirejs/require.js" data-main="/assets/js/compiled-app"></script>```


### Notes

The compiled CSS and JS files are placed directly in the assets/css and assets/js folders, intermingled with the src code. This could perhaps be separated out into dedicated ```src``` folders for the SCSS and non-compiled JS code.


[zepto]: http://zeptojs.com/ 
[underscore]: http://underscorejs.org/ "Underscore.js"
[backbone]: http://backbonejs.org/  "Backbone.js"
[handlebars]: http://handlebarsjs.com/ "Handlebars"
[require]: http://requirejs.org/ "Require.js"
[nodejs]: http://nodejs.org/ "NodeJS"
[grunt]: http://gruntjs.com/ "Grunt"
[karma]: http://karma-runner.github.io/0.10/index.html "Karma"
[jasmine]: http://pivotal.github.io/jasmine/ "Jasmine"
[bower]: http://bower.io/ "Bower"
[sass]: http://sass-lang.com/ "Sass"
[amd]: http://requirejs.org/docs/whyamd.html "Why AMD?"

