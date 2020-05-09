'use strict';

module.exports = function(grunt){
	require('jit-grunt')(grunt);
	grunt.initConfig({
		watch: {
			md: {
				files: ['*.md', '*.jst'],
				tasks: ['markdown']
			}
		},
		browserSync: {
			options: {
				background: true
			},
			livereload: {
				options: {
					server: {
						baseDir: 'pages',
						routes: {
							'/images': 'images',
							'/scripts': 'scripts',
							'/styles': 'styles'
						}
					},
					port: 9000,
					files: [
						'pages/*.html',
						'styles/*.css',
						'scripts/*.js'
					]
				}
			}
		},
		copy: {
			build:{
				files: [
					{
						expand: true,
						cwd: '.',
						dest: 'build/',
						src: [
							'styles/**',
							'scripts/**'
						]
					},
					{
						expand: true,
						cwd: 'pages',
						dest: 'build/',
						src: '*.html'
					}
				]
			}
		},
		markdown: {
			all: {
				files: [{
					expand: true,
					src: '*.md',
					dest: 'pages/',
					ext: '.html'
				}],
				options: {
					template: 'md.jst',
					templateContext: {
						title: 'Stupid Genius Software'
					}
				}
			}
		}
	});

	grunt.registerTask('serve', 'start local server', function (){
		grunt.task.run([
			'browserSync:livereload',
			'watch'
		]);
	});
	grunt.registerTask('build', 'create build', function(){
		grunt.task.run([
			'markdown',
			'copy'
		]);
	});
};
