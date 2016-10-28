
module.exports = function (config) {
	'use strict';
	let configuration = {

		basePath: '',

		frameworks: ['jasmine'],

		files: [
			'./public/components/**/*.js',
			'./public/modules/**/*.js',
			'./public/views/**/*.js',
			'./test/**/*.spec.js'
		],

		reporters: ['progress', 'coverage'],
		preprocessors: {
			'./public/components/**/*.js': ['coverage'],
			'./public/modules/**/*.js': ['coverage'],
			'./public/views/**/*.js': ['coverage']
		},

		port: 9876,
		colors: true,
		autoWatch: false,
		singleRun: false,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,
		plugins: [
			'karma-jasmine',
			'karma-coverage'
		],
		browsers: ['PhantomJS'],
		customLaunchers: {
			'PhantomJS_flags': {
        			base: 'PhantomJS',
        			flags: ['--load-images=false']
      			}
		},
		coverageReporter: {
			type: 'html',
			dir: 'public/coverage/'
		}
	};

	if (process.env.TRAVIS) {
		configuration.browsers = ['PhantomJS_flags']
	}

	config.set(configuration)
};

