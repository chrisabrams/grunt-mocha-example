/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',

    mocha: {
      // Runs 'test/test2.html' with specified mocha options.
      // This variant auto-includes 'bridge.js' so you do not have
      // to include it in your HTML spec file. Instead, you must add an
      // environment check before you run `mocha.run` in your HTML.
      test2: {

        // Test files
        src: [ 'test/index.html' ],
        options: {
          // mocha options
          mocha: {
            ignoreLeaks: false,
            grep: 'food'
          },

          // Indicates whether 'mocha.run()' should be executed in
          // 'bridge.js'. If you include `mocha.run()` in your html spec, you
          // must wrap it in a conditional check to not run if it is opened
          // in PhantomJS, see example/test/test2.html
          run: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-mocha");

  grunt.registerTask('default', 'mocha');
};
