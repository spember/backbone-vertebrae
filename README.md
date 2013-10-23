# Backbone Vertebrae

This goal of this project is to outline a sample, simple folder structure for creating future Backbone apps. (In addition, it's an exercise for me to learn [Gradle][gradle], a fantastic build tool)

### Overview and Layout

When working with [Backbone][backbone], I find it is easier to place each individual Model, Collection, View, etc into its own individual file in logical folders. During development, each individual file is included separately and loaded via [head.js]head]; in Production the entire set of files is compressed and minified into one file.

Templates are defined as separate HTML files, which are then pre-compiled into [Handlebars][handlebars] (or [Hogan][hogan]) Templates.


### Instructions

First, replace all our occurences of the 'MyApp' namespace with your own namespace, primarily in js/src/app.js. There are stub files in js/src/templates/ and js/src/views/ that should be removed or updated as well.

### Build with Gradle

The compilation and compression is done via [Gradle][gradle]. We define three build tasks, <strong>compileTemplates</strong>, <strong>generateDevelopment</strong>, and <strong>compress</strong>. Usage is as follows:

	gradle compileTemplates

Will convert all .html files located in js/src/templates into one file filled with pre-compiled strings. The templateAgent namespace (e.g. 'Handlebars') is defined as property within the gradle build script. 

The second task is:

	gradle compress 

This task will compile the Templates, then use YUI to minify and compress the javascript files. A base file that should be compressed first is identified as a property of the task within the build script.

Third:

	gradle generateDevelopment

or

	gradle gD

This will create a JS file intended for use with head.js, which will load your project's files. It is intended for development usage and to keep the developer from having to manually add their individual JS files.

[backbone]: http://backbonejs.org/  "Backbone.js"
[handlebars]: http://handlebarsjs.com/ "Handlebars Templating"
[hogan]: http://twitter.github.com/hogan.js/
[gradle]: https://github.com/gradle/gradle
[head]: http://headjs.com/

