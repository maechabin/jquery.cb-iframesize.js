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
        files: 'jquery.cbiframesize.js',
        tasks: ['uglify']
      }
    },

    jshint: {
      all: ['jquery.cbiframesize.js']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('hint', ['jshint']);

};