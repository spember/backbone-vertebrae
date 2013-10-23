module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
        all: ['Gruntfile.js', 'assets/js/**/*.js'],
         options: {
            ignores: ['assets/js/app/templates/hbs-compiled.js', 'assets/js/libs/*.js' ]
        }
    },
    handlebars: {
        compile: {
            options: {
                // so we can use it with require!
                amd: true,
                namespace: "myNamespace",
                processName: function(filename) {
                    var names = filename.split("/");
                    return names[names.length - 1].substring(0, names[names.length-1].length - 4);
                }
            },
            files: {
                "assets/js/app/templates/hbs-compiled.js": "assets/js/app/templates/handlebars/**/*.hbs"
            }
        }
    },
    sass: {
        edit_style: {
          files: {
            'assets/css/style.css': 'assets/css/scss/style.scss'
          }
        }
    },
    watch : {
        hbs: {
            files: ['assets/js/app/templates/handlebars/*.hbs'],
            tasks: ['handlebars'],
            options: {
                spawn: false,
            },
        },
        sass: {
            files: ['assets/css/scss/**/*.scss'],
            tasks: ['sass'],
            options: {
                spawn: false
            }
        }
    },
    karma: {
        unit: {
            autoWatch: true,
            browsers: ['PhantomJS'],
            //configFile: 'karma.conf.js',
        
          options: {
            frameworks: ['jasmine', 'requirejs'],

            files: [
                "assets/js/libs/bower_components/underscore/underscore-min.js",
                "assets/js/libs/bower_components/zepto/zepto.min.js",
                "assets/js/libs/bower_components/baclbone/backbone-min.js",
                "assets/js/libs/bower_components/handlebars/handlebars.js",
                // the included: false is mandatory in order to be loaded with requirejs; ignoring this causes the scripts to be loaded in 
                // phantom, which causes requirejs to fail as the scripts have all ready been processed.
                {pattern: "assets/js/app/**/*.js", included: false},
                {pattern: "assets/js/test/**/*.js", included: false},
                // test runner
                "assets/js/test_init.js"
            ],
            exclude: [
            // don't use the actual app init
                'assets/js/init.js'
            ]
          }
        },

    }
    
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-karma');
  grunt.registerTask('default', ['jshint', 'karma']);
};