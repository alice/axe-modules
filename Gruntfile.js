module.exports = function (grunt) {
	'use strict';

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.initConfig({
                clean: ['out'],
		concat: {
			rules: {
				src: [
					'lib/prolog.stub',
                                        'lib/goog.js',
					'lib/utils/*.js',
                                        'lib/checks/**/*.js',
                                        'lib/matchers/*.js',
                                        'lib/rules/**/*.js',
					'lib/epilog.stub'
				],
				dest: 'out/modules.js',
			},
		}
	});

	grunt.registerTask('default', ['build']);

	grunt.registerTask('build', ['clean', 'concat']);
};
