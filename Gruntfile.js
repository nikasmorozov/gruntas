module.exports = function(grunt) {
  grunt.initConfig({
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'production'
        }
      },
    },
    watch: {
      css: {
        files: ['sass/*.scss'],
        tasks: ['compass'],
        options: {
          livereload: true,
        },
      },
    },
  });

  [
    'grunt-contrib-compass',
    'grunt-contrib-watch'
  ].forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['compass']);
};