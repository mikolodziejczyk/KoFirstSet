
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            formBinding_textTs: {
                tsconfig: {
                    tsconfig: 'AppScripts/FormBinding/Text/tsconfig.json',
                    passThrough: true
                }
            },
            formBinding_checkboxAndRadioTs: {
                tsconfig: {
                    tsconfig: 'AppScripts/FormBinding/CheckboxAndRadio/tsconfig.json',
                    passThrough: true
                }
            },
            fundamentals: {
                tsconfig: {
                    tsconfig: 'AppScripts/Fundamentals/tsconfig.json',
                    passThrough: true
                }
            }
        },
        concat: {
            bundle: {
                options: {
                    separator: ';\n',
                    sourceMap: false,
                },
                src: [
                // all source files go here, ordered
                './node_modules/moment/moment.js',
                './node_modules/moment/locale/pl.js',
                "./Scripts/jsurl-1.2.2.js",
                "./Scripts/jquery-1.9.1.js",
                "./Scripts/jquery-migrate-1.2.1.js",
                "./Scripts/jquery.validate.js",
                "./Scripts/jquery.validate.unobtrusive.js",
                "./Scripts/bootstrap.js",
                "./Scripts/bootstrap-datetimepicker.js",
                "./Scripts/sprintf.min.js"
                ],
                dest: 'dist/MyApp/Scripts/bundle.js'
            }
        },
        uglify: {
            bundle: {
                options: {
                    mangle: false,
                    sourceMap: false
                },
                dest: 'dist/MyApp/Scripts/bundle.min.js',
                src: 'dist/MyApp/Scripts/bundle.js'
            },
        }


    });


    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');



    // Default task(s).
    grunt.registerTask('default', ['ts']);
    grunt.registerTask('jsbundle', ['concat:bundle','uglify:bundle']);
};
