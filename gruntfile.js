module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: {
                    'dist/style.css': 'src/style.less'
                }
            }
        },

        uglify: {
            build: {
                files: {
                    'dist/script.min.js': 'src/script.js'
                }
            }
        },

        watch: {
            styles: {
                files: ['src/*.less'],
                tasks: ['less']
            },
            scripts: {
                files: ['src/*.js'],
                tasks: ['uglify']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'uglify']);

};