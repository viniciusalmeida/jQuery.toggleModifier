module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('bower.json'),

    qunit: {
      files: ['tests/index.html']
    },

    uglify: {
      build: {
        files: {
          'dist/jQuery.toggleModifier.min.js': ['lib/jQuery.toggleModifier.js']
        }
      }
    },

    copy: {
      main: {
        src: 'lib/jQuery.toggleModifier.js',
        dest: 'dist/jQuery.toggleModifier.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', ['uglify:build', 'copy']);
};
