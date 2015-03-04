module.exports = function (grunt) {

    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({

        uglify: {
            dist: {
                files: {
                    'jquery.cbiframesize.min.js': 'jquery.cbiframesize.js'
                }
            }
        },

        watch: {
            js: {
                files: '*.js',
                tasks: ['uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['uglify']);

};