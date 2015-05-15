module.exports = function(grunt) {
  grunt.initConfig({
    qunit: {
      files: ['tests/index.html']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask('test', 'qunit');
};
