//Karma configuration
module.exports = function(config) {
	
    config.set({
    	
        // base path, that will be used to resolve files and exclude
        basePath: '../WebContent',


        // frameworks to use
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'js/angular.js',
            'js/angular-mocks.js',
            'js/jquery-1.11.1.min.js',
            //code:
            'js/app-7/FruitsApp.js',
            //'js/app-8/WindowDirective.js',
            'js/app-9/TaskbarAndWindowDirective.js',
            //test cases:
            'tests/FruitsApp.test.js',
            //'tests/WindowDirective.test.js',
            'tests/TaskbarAndWindowDirective.test.js'
        ],


        // list of files to exclude
        exclude: [
        ],


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress', 'html'],
        
        htmlReporter: {
            outputFile: '../build/output.html',
            templatePath: __dirname+'/jasmine_template.html'
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
//        browsers: ['PhantomJS'],
        browsers: ['Chrome'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 5000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};